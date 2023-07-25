import {sentences} from './sentences';

export const Sentence = () => {
    const n:number = Math.floor(Math.random() * sentences.length);
    return(
        <>
           <p style={{color: 'red', margin: '10px'}}>
                {sentences[n]}
            </p> 
        </>
    )
}