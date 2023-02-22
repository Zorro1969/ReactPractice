import PostImage from './PostImage';
import PostContent from './PostContent';
export default function Post(props){
    return (
        <div className='col-6 post'>
         <PostImage url={props.url}/>
         <PostContent title={props.title} text={props.text}/>
        </div>
    );
}