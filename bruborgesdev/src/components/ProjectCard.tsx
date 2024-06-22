import { TechTag } from './TechTag'
import { GitHub } from '@mui/icons-material'
import PublicIcon from '@mui/icons-material/Public';

interface ProjectCardProps {
    img: string;
    title: string;
    description: string;
    tags: string[];
    git: string;
    url: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ img, title, description, tags, git, url }) => {
    return (
        <div className='md:w-56 w-60 flex flex-col pb-8'>
            <div className='bg-cl-lavander p-3 rounded-xl flex flex-col items-center text-center justify-center h-[400px]'>
                <a href={ url }>
                    <img src={img} className='w-48 h-28 border border-cl-green rounded-md overflow-hidden hover:scale-150 cursor-pointer duration-300'  alt="Project image" />
                </a>
                <h1 className="font-bold text-xl text-cl-purple pt-5">{ title }</h1>
                <span className="leading-5 text-cl-white py-3">
                    { description }
                </span>
                <div className='flex gap-1'>
                    {tags.map((tag: string, index: number) => (
                        <TechTag key={index} tech={tag} />
                    ))}
                </div>
                <div className='flex pt-4 gap-3 text-cl-purple'>
                    <a href={git}>
                        <GitHub style={{ fontSize: '2.0rem' }} />
                    </a>
                    <a href={url}>
                        <PublicIcon style={{ fontSize: '2.0rem' }} />
                    </a>
                </div>
            </div>
        </div>
    );
}
