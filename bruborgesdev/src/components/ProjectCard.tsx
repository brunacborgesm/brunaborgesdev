import { TechTag } from './TechTag'
import { GitHub } from '@mui/icons-material'
import PublicIcon from '@mui/icons-material/Public';

interface ProjectCardProps {
    img: string;
    tags: string[];
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ img, tags }) => {
    return (
        <div className='w-72 flex flex-col pb-8'>
            <div className='bg-cl-lavander p-5 rounded-xl flex flex-col items-center text-center'>
                <img src={ img } alt="Project image" />
                <h1 className="font-bold text-xl text-cl-purple">Projeto 1</h1>
                <span className="leading-7 text-cl-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eleifend orci eu elit luctus molestie.</span>
                <div className='flex gap-1 py-2'>
                    {tags.map((tag: string, index: number) => (
                        <TechTag key={index} tech={tag} />
                    ))}
                </div>
                <div className='flex py-2 gap-5 text-cl-purple'>
                    <GitHub style={{ fontSize: '2.5rem' }} />
                    <PublicIcon style={{ fontSize: '2.5rem' }} />
                </div>
            </div>
        </div>
    );
}
