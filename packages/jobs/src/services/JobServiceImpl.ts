import jenkins from 'jenkins';
import JobService from './JobService';
import {UUID} from '../types';

class JobServiceImpl implements JobService {
  jenkins: any;

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
  public createJob(config: JobConfig) {}
  public getJob(id: UUID) {
    return new Job();
  }
  public deleteJob(id: UUID) {}
  public listJobs() {
    return [new Job()];
  }
}
export default JobServiceImpl;
