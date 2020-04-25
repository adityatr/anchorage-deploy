import {UUID} from '../types';

interface JobService {
  createJob: (config: JobConfig) => Promise<UUID>;
  getJob: (id: UUID) => Promise<Job>;
  deleteJob: (id: UUID) => Promise<void>;
  listJobs: () => Promise<Job[]>;
}

export default JobService;
