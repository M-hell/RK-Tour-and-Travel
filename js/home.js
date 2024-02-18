var tl=gsap.timeline();
tl.from("#id3",{
    opacity:0,

    onStart:function(){
        $('#id3').textillate({ in: { effect: 'fadeInUp',
        callback:function(){
            $('#id3').textillate('out')
        } },
    out: {effect:'fadeOutUp'} });
    }
})
tl.from("#id2",{
    delay:1,
    opacity: 0,
    
    onStart:function(){
        $('#id2').textillate({ in: { effect: 'fadeInUp',
        callback:function(){
            $('#id2').textillate('out')
        } },
    out: {effect:'fadeOutUp'} });
    }
})
tl.from("#id1",{
    delay:1,
    opacity:0,
    
    onStart:function(){
        $('#id1').textillate({ in: { effect: 'fadeInUp',
        callback:function(){
            $('#id1').textillate('out')
        } },
    out: {effect:'fadeOutUp'} });
    }
})

tl.to(".center",{
    top:"-200%",
    delay:1.5,
    duration:1.5,
    ease:"Power4.easeOut"
})
tl.to(".repeatbtn",{
    duration:1,
    y:-30,
    yoyo:"true",
    repeat: -1
})
let eventonhover=document.getElementById('btnid');
eventonhover.addEventListener('mouseover',function run()
{
    let onhoverbtn=document.querySelector('.content');
    onhoverbtn.style.opacity='0.9';
});
eventonhover.addEventListener('mouseout',function run()
{
    let onhoverbtn=document.querySelector('.content');
    onhoverbtn.style.opacity='1';
});

gsap.to(".toporderimages",{
    scrollTrigger:{
        trigger:".toporderimages img",
        scroller:"body",
        start:"top 70%",
        end:"bottom 90%",
        scrub:3
    },
    y:-60,
    duration:1
})
gsap.to(".content",{
    scrollTrigger:{
        trigger:".content",
        scroller:"body",
        start:"top 0%",
        end:"bottom 70%",
        scrub:1
    },
    y:-30,
    duration:1
})
gsap.to(".imagesinofferpage img",{
    rotate:3,
    yoyo:"true",
    repeat: -1
})
function togglehide(){
    let coupon=document.getElementById('hiddencode');
    if(coupon.style.display=='none')
    {
        coupon.style.display='block';
    }
    else{
        coupon.style.display='none';
    }
}
    let breakcontent=document.querySelector('.breakfastfood');
    let lunchcontent=document.querySelector('.lunchfood');
    let snackcontent=document.querySelector('.snackfood');
    let dinnercontent=document.querySelector('.dinnerfood');
    let menuitem1=document.querySelector('.itemsinmenu1');
    let menuitem2=document.querySelector('.itemsinmenu2');
    let menuitem3=document.querySelector('.itemsinmenu3');
    let menuitem4=document.querySelector('.itemsinmenu4');
    let menuitem5=document.querySelector('.itemsinmenu5');
    let menuitem6=document.querySelector('.itemsinmenu6');
    let menuitem7=document.querySelector('.itemsinmenu7');
    let menuitem8=document.querySelector('.itemsinmenu8');
    let menuitem9=document.querySelector('.itemsinmenu9');
    let menuitem10=document.querySelector('.itemsinmenu10');
    let menuitem11=document.querySelector('.itemsinmenu11');
    let menuitem12=document.querySelector('.itemsinmenu12');
function breakfast(){
    breakcontent.style.zIndex = '1';
    lunchcontent.style.zIndex='-1';
    snackcontent.style.zIndex='-1';
    dinnercontent.style.zIndex='-1';
    menuitem1.style.display='block';
    menuitem2.style.display='block';
    menuitem3.style.display='block';
    menuitem4.style.display='none';
    menuitem5.style.display='none';
    menuitem6.style.display='none';
    menuitem7.style.display='none';
    menuitem8.style.display='none';
    menuitem9.style.display='none';
    menuitem10.style.display='none';
    menuitem11.style.display='none';
    menuitem12.style.display='none';


    gsap.from(".itemsinmenu1",{
        opacity:0,
        y:50,
        duration:1
    })
    gsap.from(".itemsinmenu2",{
        opacity:0,
        y:50,
        duration:1
    })
    gsap.from(".itemsinmenu3",{
        opacity:0,
        y:50,
        duration:1
    })
}
function lunch(){
    breakcontent.style.zIndex = '-1';
    lunchcontent.style.zIndex='1';
    snackcontent.style.zIndex='-1';
    dinnercontent.style.zIndex='-1';
    menuitem1.style.display='none';
    menuitem2.style.display='none';
    menuitem3.style.display='none';
    menuitem4.style.display='block';
    menuitem5.style.display='block';
    menuitem6.style.display='block';
    menuitem7.style.display='none';
    menuitem8.style.display='none';
    menuitem9.style.display='none';
    menuitem10.style.display='none';
    menuitem11.style.display='none';
    menuitem12.style.display='none';

    gsap.from(".itemsinmenu4",{
        opacity:0,
        y:50,
        duration:1
    })
    gsap.from(".itemsinmenu5",{
        opacity:0,
        y:50,
        duration:1
    })
    gsap.from(".itemsinmenu6",{
        opacity:0,
        y:50,
        duration:1
    })
}
function snacks(){
    breakcontent.style.zIndex = '-1';
    lunchcontent.style.zIndex='-1';
    snackcontent.style.zIndex='1';
    dinnercontent.style.zIndex='-1';
    menuitem1.style.display='none';
    menuitem2.style.display='none';
    menuitem3.style.display='none';
    menuitem4.style.display='none';
    menuitem5.style.display='none';
    menuitem6.style.display='none';
    menuitem7.style.display='block';
    menuitem8.style.display='block';
    menuitem9.style.display='block';
    menuitem10.style.display='none';
    menuitem11.style.display='none';
    menuitem12.style.display='none';

    gsap.from(".itemsinmenu7",{
        opacity:0,
        y:50,
        duration:1
    })
    gsap.from(".itemsinmenu8",{
        opacity:0,
        y:50,
        duration:1
    })
    gsap.from(".itemsinmenu9",{
        opacity:0,
        y:50,
        duration:1
    })
}
function dinner(){
    breakcontent.style.zIndex = '-1';
    lunchcontent.style.zIndex='-1';
    snackcontent.style.zIndex='-1';
    dinnercontent.style.zIndex='1';
    menuitem1.style.display='none';
    menuitem2.style.display='none';
    menuitem3.style.display='none';
    menuitem4.style.display='none';
    menuitem5.style.display='none';
    menuitem6.style.display='none';
    menuitem7.style.display='none';
    menuitem8.style.display='none';
    menuitem9.style.display='none';
    menuitem10.style.display='block';
    menuitem11.style.display='block';
    menuitem12.style.display='block';

    gsap.from(".itemsinmenu10",{
        opacity:0,
        y:50,
        duration:1
    })
    gsap.from(".itemsinmenu11",{
        opacity:0,
        y:50,
        duration:1
    })
    gsap.from(".itemsinmenu12",{
        opacity:0,
        y:50,
        duration:1
    })
}



function showthanknote(){
var textvar=document.getElementById('inputtext').value;
var emailvar=document.getElementById('inputemail').value;
var numbervar=document.getElementById('inputnumber').value;
var checkvar=document.getElementById('checkinput');
    if(textvar==="")
    {
        alert("Please enter your Name.");
        return;
    }
    if(emailvar==="")
    {
        alert("Please enter your Email.");
        return;
    }
    if(numbervar===""){
        alert("Please enter your Phone Number.");
        return;
    }
    if(!checkvar.checked){
        alert("Please agree terms and conditions.");
        return;
    }
    let displaychange=document.querySelector('.thanknote');
    let target=document.getElementById('thanknotetarget');
    displaychange.style.display='block';
    target.innerHTML=textvar+", ";    
}