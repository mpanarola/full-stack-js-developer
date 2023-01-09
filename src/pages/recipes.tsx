import React from 'react';
import Link from 'next/link';
import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const Recipes = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>

      <ul className="breadcrumb flex">
      <Link href="/">
          <a>Recipes »</a>
      </Link>
          <li><a href="#">Breads » </a></li>
          <li> Quick Bread</li>
    </ul>

    <Content>
      <div className='flex'>
    
     
      <div className='w-50'>
      <h2>Whole-Grain Banana Bread</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fuga
        recusandae quidem. Quaerat molestiae blanditiis doloremque possimus
        labore voluptatibus distinctio recusandae autem esse explicabo molestias
        officia placeat, accusamus aut saepe.
      </p>
     
      </div>
      <div className='w-50'>
        <img src='/assets/images/posts/random-img.jpg' />
      </div>
      </div>

      <div className='recipes_content flex'>
        <div>
        
          <h4>⏲ PREP</h4>
          <p>10 mins</p>
        </div>

        <div>
          <h4>BAKE</h4>
          <p>1 hr to 1 hr 15 mins</p>
        </div>

        <div>
          <h4>TOTAL</h4>
          <p>1 hr 10 mins</p>
        </div>

      </div>


      <div className='recipes_content flex'>
      <div>
       
          <h4> ⏲ YIELD</h4>
          <p>1 loaf, 12 generous <br/> serving</p>
        </div>

        <div>
        <button className='border_red'> 🠖 Save Recipes</button>

        
        </div>

        <div>
        <button className='border_red'>🖶 Print</button>
        </div>

      </div>
    </Content>
  </Main>
);

export default Recipes;
