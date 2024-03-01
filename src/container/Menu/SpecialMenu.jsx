import React from 'react';

import './SpecialMenu.css';
import { images, data } from '../../constants'
import { SubHeading , MenuItem } from '../../components'

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id='menu'>
       
       {/* title */}

      <div className='app__specialMenu-title'>
        <SubHeading title='Menu that fits you palatte'/>
        <h1 className='headtext__cormorant'>Today’s Special</h1>
      </div>


   

  <div className='app__specialMenu-menu'>

     {/* Wine & Beer */}
           <div className='app__specialMenu-menu_wine flex__center'>
                  <p className='app__specialMenu-menu_heading'> Wine & Beer </p>
                   <div className='app__specialMenu_menu_items'>
                        {data.wines.map((wine,idx)=>(
                            <MenuItem key={wine.title + idx } title={ wine.title } price={ wine.price } tags={ wine.tags } />
                        ))}
                   </div>
           </div>
 

      {/* images */}

      <div className='app__specialMenu-menu_img'>
              <img src={images.menu} alt="Menu image" />
      </div>


      {/* Cocktails */}
 
           <div className='app__specialMenu-menu_cocktails flex__center'>
                  <p className='app__specialMenu-menu_heading'> Cocktails </p>
                   <div className='app__specialMenu_menu_items'>
                        {data.cocktails.map((cocktail,idx)=>(
                          <MenuItem key={cocktail.title + idx } title={ cocktail.title } price={ cocktail.price } tags={ cocktail.tags } />
                        ))}
                   </div>
           </div>

     </div>


      {/*  button */}
      <div style={{marginTop:'15px'}}>
           <button  type='button' className='custom__button'> View More </button>
      </div>

  </div>
);

export default SpecialMenu;
