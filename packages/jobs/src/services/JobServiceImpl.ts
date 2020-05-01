import jenkins, {JenkinsPromisifiedAPI} from 'jenkins';
import JobService from './JobService';
import {UUID} from '../types';
import {v4 as uuidv4} from 'uuid';
import xml from 'xml-js';
import fs from 'fs';

class JobServiceImpl implements JobService {
  private jenkins: JenkinsPromisifiedAPI;
  private baseJobTemplate: string;
  constructor(jobServerBaseUrl: string, username: string, apiToken: string) {
    const basicAuthToken = Buffer.from(
      `${username}:${apiToken}`,
      'base64'
    ).toString('ascii');
    this.jenkins = jenkins({
      baseUrl: jobServerBaseUrl,
      promisify: true,
      headers: `Authorization: Basic ${basicAuthToken}`,
    });
    this.baseJobTemplate = fs.readFileSync('job.xml', 'utf8');
  }
  public async createJob(config: JobConfig): Promise<UUID> {
    const id = uuidv4();
    await this.jenkins.job.create(id, this.populateJob(config));
    return id;
  }
  public async getJob(id: UUID): Promise<Job> {
    return await this.jenkins.job.config(id);
  }
  public async deleteJob(id: UUID) {
    await this.jenkins.job.destroy(id);
    return;
  }
  public async listJobs(searchString?: string) {
    return this.jenkins.job.list();
  }

  private populateJob(config: JobConfig): string {
    const jsonJobTemplate = JSON.parse(xml.xml2json(this.baseJobTemplate));
    jsonJobTemplate.project.description = config.description;
    jsonJobTemplate.project.properties[
      'com.coravy.hudson.plugins.github.GithubProjectProperty'
    ] = config.gitRepoUrl;
    jsonJobTemplate.project.scm.userRemoteConfigs[
      'hudson.plugins.git.UserRemoteConfig'
    ].url = config.gitRepoUrl;
    jsonJobTemplate.hudson.plugins.git.branches[
      'hudson.plugins.git.BranchSpec'
    ].name = config.branchSpec;
    return xml.json2xml(jsonJobTemplate);
  }
}
export default JobServiceImpl;
