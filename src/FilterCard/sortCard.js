import {data} from '..//assests/public/data'


export const sortCards=(data)=>{


    const dataCardList=[];
    const imageCardList=[];
    const textCardList=[];

    for(const card of data){
        switch (card.type) {
            case 'DATA-CARD':
              dataCardList.push(card);
              break;
            case 'IMAGE-CARD':
              imageCardList.push(card);
              break;
            case 'TEXT-CARD':
              textCardList.push(card);
              break;
            default:
              console.warn(`Invalid card type: ${card.type}`);
          }
    }
    return { dataCardList, imageCardList, textCardList };
}