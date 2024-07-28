import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import './main1.css'
// import Skeleton from 'react-loading-skeleton'
// import 'react-loading-skeleton/dist/skeleton.css'
// import cardsskeleton from './cardsskeleton';
// import Skeleton from 'react-loading-skeleton';


const WordDisplay = ({ text }) => {
  const words = text.split(' ');
  return (
    <div>
      {words.length > 4? `${words.slice(0, 4).join(' ')}...` : text}
    </div>
  );
};



function main({animedata,isloading}) {

  return (
   <div className="flex">
   {
   isloading&&animedata.length!==0?(
    animedata.map((e,index)=>{
      return (
        <div className="flex flex-height"  key={e.mal_id} >
          <Card style={{ width: '18rem', height:'30rem' }}>
          <Card.Img variant="top" src={e.images.jpg.large_image_url} />
          <Card.Body>
            <Card.Title> <WordDisplay text={e.title} /></Card.Title>
            <Button variant="primary btnclass"><a href={e.url} className='color-white' target='_blank'>View More</a></Button>
          </Card.Body>
        </Card>
        </div>
      );
    
   })
   ):<>
   <div className="main-width-loader">
   <div className='loader'></div>
   </div>
   </>
  }
   </div>

  )
}

export default main;


// import React from 'react'




