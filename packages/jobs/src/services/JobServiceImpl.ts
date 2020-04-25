import jenkins, {JenkinsPromisifiedAPI} from 'jenkins';
import JobService from './JobService';
import {UUID} from '../types';
import {v4 as uuidv4} from 'uuid';
class JobServiceImpl implements JobService {
  private jenkins: JenkinsPromisifiedAPI;

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
  }
  public async createJob(config: JobConfig): Promise<UUID> {
    const id = uuidv4();
    await this.jenkins.job.create(id, '');
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
}
export default JobServiceImpl;
