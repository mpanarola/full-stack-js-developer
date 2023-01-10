import React from 'react';
// import Link from 'next/link';
import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const Recipes = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>

    <div className='md:container md:mx-auto'>
      <div className="pt-12">

        <ul className="breadcrumb flex flex-wrap">
          <li>
            <a href="javascript:void(0);" className='flex flex-wrap items-center'>
              <span className='mr-1'>
                Recipes 
              </span>
              <span>
                    <svg width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
              </span>    
            </a>
            
          </li>
              <li>
                <a href="javascript:void(0);" className='flex flex-wrap items-center'>
                  <span  className='mr-1'>
                    Breads
                  </span>
                  <span>
                    <svg width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
              </span> 
                </a>
              </li>
              <li> Quick Bread</li>
        </ul>

        <Content>
          <div className='flex custom_content'>
        
        
          <div className='width_ato left-block'>
          <h2 className='title'>Whole-Grain Banana Bread</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fuga
            recusandae quidem. Quaerat molestiae blanditiis doloremque possimus
            labore voluptatibus distinctio recusandae autem esse explicabo molestias
            officia placeat, accusamus aut saepe.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fuga
            recusandae quidem. Quaerat molestiae blanditiis doloremque possimus
            labore voluptatibus distinctio recusandae autem esse explicabo molestias
            officia placeat, accusamus aut saepe.
          </p>


          <div className='custom_content border-block'>
          <div className='recipes_content flex '>
            <div className='rec_items flex flex-wrap '>
              <div className="rec_item_icon">
                <svg width="30" height="30" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
                  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" fill='#000' />
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" fill='#000' />
                </svg>
              </div>
              <div className="rec_item_desc">
                <h4>PREP</h4>
                <p>10 mins</p>
              </div>
            </div>

            <div className='rec_items flex flex-wrap'>
            <div className="rec_item_desc">
                <h4>BAKE</h4>
                <p>1 hr to 1 hr 15 mins</p>
              </div>
            </div>

            <div className='rec_items flex flex-wrap'>
            <div className="rec_item_desc">
                <h4>TOTAL</h4>
                <p>1 hr 10 mins</p>
              </div>
            </div>

          </div>


          <div className='recipes_content flex w-100'>
          <div className='rec_items flex flex-wrap full'>
              <div className="rec_item_icon">
                <svg width="30" height="30" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
                  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" fill='#000' />
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" fill='#000' />
                </svg>
              </div>
              <div className="rec_item_desc">
                <h4>YIELD</h4>
                <p>1 loaf, 12 generous <br/> serving</p>
              </div>
            </div>
          <div className='rec_items flex flex-wrap full'>
              
              <div className="rec_item_desc">
                <button className='btn border_red'> 
                  <span className='btn-icon'>
                    <svg width="16" height="16" fill="currentColor" className='bi bi-plus-l' viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                    </svg>
                  </span>
                  <span className='btn-text'>
                    Save Recipes
                  </span>
                 </button>
                <button className='btn border_red'>
                    <span className='btn-icon'>
                      <svg width="16" height="16" fill="currentColor" className='bi bi-printer' viewBox="0 0 16 16">
                        <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/>
                        <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z"/>
                      </svg>
                    </span>
                    <span className='btn-text'>
                      Print
                    </span>
                </button>
              </div>
            </div>


          </div>
          </div>
        
          </div>
          <div className='width_ato '>
            <img src='/assets/images/posts/random-img.jpg' />
          </div>
          </div>

        
        </Content>
      </div>
    </div>
  </Main>
);

export default Recipes;
