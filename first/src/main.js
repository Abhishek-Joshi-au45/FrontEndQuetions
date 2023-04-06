import React from 'react';

const Main = () => {
  return (
    <div id="main" >
    <div style={{padding:'10px'}}>
      <h1><strong>THE WORLD'S FIRST-EVER COOKERY SHOW</strong></h1>
      <h1>HOSTED ON THE METAVERSE</h1>
    </div>
    
    <div style={{marginLeft: '800px', textAlign:'left'}}>
        {/* <img src='./bgOverlay.png' alt='sandeep sir' height='500px'/> */}
        <h1>WHERE</h1>
        <h1>DELICIOUS GOES</h1>
        <h1>DIGITAL</h1>
    </div>

    <div style={{marginLeft: '800px'}}>
      <p>Participate in the Nutraverse Recipe Contest, and
          have your recipes travel from your kitchen to a
          whole new Universe! The best recipes under three
          exciting categories stand a chance to win prizes
          worth Rs. 1 Lakh*!</p>
    </div>

    <div style={{marginLeft: '500px'}} ><button className='btn btn-warning'>SUBMIT YOUR RECIPE</button></div>
    <div style={{marginLeft: '800px'}}><p>*You can create a recipe only in one category</p></div>

    <div style={{background: 'white', marginTop:'200px', marginRight:'50px', marginLeft:'50px', padding:'40px', borderRadius:'20px'} }>
     <h6> What's more, you also get the golden opportunity to meet </h6>
     <h3> <strong style={{color:'orange'}}>CHEF SANJEEV KAPOOR</strong> AND WITNESS HIM COOKING IN THE NUTRAVERSE </h3>
      <h3>  IN A NEVER-SEEN-BEFORE AVATAR ON </h3>  
       <h3 style={{color:'orange'}}>DD-MM-YYYY</h3> 
      </div>

      <div style={{padding:'50px'}}>
        <h1>ABOUT US</h1>
        <p>Nutralite has been bringing health and taste together since 2006. Our products help smart homemakers choose healthier alternatives
to tasty food accompaniments and keep their daily meals fuss-free, delicious, and healthy too!</p>
      </div>

      <div style={{background: 'white', marginTop:'10px', marginRight:'500px', marginLeft:'500px', padding:'40px', borderRadius:'20px'} }>
        <h5 >Recipes Submitted</h5>
        <span style={{background:'orange', padding:'10px', margin:'10px' , borderRadius:'10px'}}><strong>9</strong></span>
        <span style={{background:'orange', padding:'10px', margin:'10px',borderRadius:'10px'}}><strong>9</strong></span>
        <span style={{background:'orange', padding:'10px', margin:'10px',borderRadius:'10px'}}><strong>9</strong></span>
        <span style={{background:'orange', padding:'10px', margin:'10px',borderRadius:'10px'}}> <strong>9</strong></span>

      </div>

    </div>
  );
};

export default Main;
