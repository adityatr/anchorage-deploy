import jenkins from 'jenkins';
import JobService from './JobService';
import {UUID} from '../types';

class JobServiceImpl implements JobService {
  jenkins: any;

  constructor() {
    this.jenkins = jenkins({
      //   assignedLabels: [],
      description: null,
      jobs: [
        {
          color: 'blue',
          name: 'example',
          url: 'http://localhost:8080/job/example/',
        },
      ],
      mode: 'NORMAL',
      nodeDescription: 'the master Jenkins node',
      nodeName: '',
      numExecutors: 2,
      overallLoad: {},
      primaryView: {
        name: 'All',
        url: 'http://localhost:8080/',
      },
      quietingDown: false,
      slaveAgentPort: 12345,
      unlabeledLoad: {},
      useCrumbs: false,
      useSecurity: false,
      views: [
        {
          name: 'All',
          url: 'http://localhost:8080/',
        },
      ],
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
