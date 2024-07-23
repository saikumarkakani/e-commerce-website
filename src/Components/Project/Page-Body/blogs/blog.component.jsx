import '../blogs/blog.component.css';
import blog1 from '../../../../Assests/Images/blog1.webp';
import blog2 from '../../../../Assests/Images/blog2.webp';
import blog3 from '../../../../Assests/Images/blog3.webp';
import blog4 from '../../../../Assests/Images/blog4.webp';
import blog5 from '../../../../Assests/Images/blog5.webp';
import blog6 from '../../../../Assests/Images/blog6.webp';




export function MyBlogs() {

    return (

        <div>
        
            <div className='about-color'>
                <h1 className='about'>Blog</h1>
                <div className='about-small'>Blog Grid Style</div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div className='d-flex blog'>
                <div class="card blog-box" style={{ width: '20rem' }}>
                    <img src={blog1} class="card-img-top" alt="..." /><br></br>
                    <div class="card-body">
                        <h5 class="card-title blog-h-text"><b>New organization are added seal there</b></h5><br></br>
                        <p class="card-text">Was drawing natural fat respect husband. An as noisy an offer drawn blush...</p>
                        <a href="#" class="btn ReadMore-btn">Read More</a>
                    </div>
                </div>

                <div class="card blog-box" style={{ width: '20rem' }}>
                    <img src={blog2} class="card-img-top" alt="..." style={{ height: '230px' }} /><br></br>
                    <div class="card-body">
                    <h5 class="card-title blog-h-text"><b>Was drawing natural fat respect husband</b></h5><br></br>
                        <p class="card-text">Was drawing natural fat respect husband. An as noisy an offer drawn blush...</p>
                        <a href="#" class="btn ReadMore-btn">Read More</a>
                    </div>
                </div>
                <div class="card blog-box" style={{ width: '20rem' }}>
                    <img src={blog3} class="card-img-top" alt="..." /><br></br>
                    <div class="card-body">
                    <h5 class="card-title blog-h-text"><b>In mr began music weeks after at begin</b></h5><br></br>
                        <p class="card-text">Was drawing natural fat respect husband. An as noisy an offer drawn blush...</p>
                        <a href="#" class="btn ReadMore-btn">Read More</a>
                    </div>
                </div>
            </div>

            <div className='d-flex blog'>
                <div class="card blog-box" style={{ width: '20rem' }}>
                    <img src={blog4} class="card-img-top" alt="..." /><br></br>
                    <div class="card-body">
                    <h5 class="card-title blog-h-text"><b>Travelling every thing her eat simply</b></h5><br></br>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn ReadMore-btn">Read More</a>
                    </div>
                </div>

                <div class="card blog-box" style={{ width: '20rem' }}>
                    <img src={blog5} class="card-img-top" alt="..." /><br></br>
                    <div class="card-body">
                    <h5 class="card-title blog-h-text"><b>These tried for way joy wrote witty</b></h5><br></br>
                        <p class="card-text">Was drawing natural fat respect husband. An as noisy an offer drawn blush...</p>
                        <a href="#" class="btn ReadMore-btn">Read More</a>
                    </div>
                </div>
                <div class="card blog-box" style={{ width: '20rem' }}>
                    <img src={blog6} class="card-img-top" alt="..."   style={{ height: '230px' }}/><br></br>
                    <div class="card-body">
                    <h5 class="card-title blog-h-text"><b>THEY SAY A PICTURE SPEAKS A THOUSAND WORDS, RIGHT?</b></h5><br></br>
                        <p class="card-text">One advanced dive...</p>
                        <a href="#" class="btn ReadMore-btn">Read More</a>
                    </div>
                </div>
            </div>
            
        </div>
    );
}