import {FC} from 'react';
import { IJob } from 'type/IJob';

interface JobItemProps {
    job: IJob;
    onClick: (job: IJob) => void;
}

const JobItem: FC<JobItemProps> = ({job, onClick}) => {
    return (
        <div onClick={() => onClick(job)}>
            {job.name}
        </div>
    );
};

export default JobItem;