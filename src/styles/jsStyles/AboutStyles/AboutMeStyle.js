import styled, {css, createGlobalStyle} from "styled-components"

export const AboutMeStyleCom = styled.div`

    font-family: 'Romelio';

    .margin-top-remove{
        margin-top: 0 !important;
    }

    .margin-container{
        width: 100%;
        height: 23vh;
    }
    .contents-container-full{
        opacity:0;
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        overflow: hidden;
    }
    .main-container2{
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .about-main-wraper{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

    }

    .photo-container{
        transition: ease-out 0.7s;
        margin-top: 3%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        /* width: 80%; */
        width: 80%;
        .item{
            display: flex;
            justify-content: center;
            flex-direction: column;
            /* width:500px; */
            width:70%;
        }
        .item-header{
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding-bottom: 5px;
            /* border-bottom: 1px dashed antiquewhite; */
        }
        .item-header-heading{
            /* width: 50%;
            font-size: 19px;
            font-weight: bold;
            text-transform: uppercase; */
        }
        .item-header-heading2{
            /* font-size: 10px;
            font-weight: bold;
            text-transform: uppercase;
            border-bottom: 1px dashed antiquewhite; */
        }
        .item-image{
            /* height: 400px; */
            /* height: 100%; */
            /* width: 1500px; */
            /* height: 780px; */
            height: 700px;
            /* background-color: gray; */
            margin: 10px 0;
        }
        .item-footer{
            display: flex;
            align-items: center;
            /* border-top: 1px dashed antiquewhite; */
            padding-top: 5px;
        }
    }


    .about-header{
        .header-text{
            font-family: 'Romelio';
            font-size: 16rem;
            font-weight: 900;
            color:#dfd3c3;
        }
    }

    .sub-text-wraper{
        position: relative;
        width: 100%;
        height: 39vh;
    }

    .sub-text{
            font-family: 'Romelio';
            font-size: 9rem;
            font-weight: 900;
            color:#dfd3c3;
        }

    .sub-text-container{
        transition: ease-out 0.7s;
        position: absolute;
        top: 0;
        left: -5%;
    }
    .sub-text-container2{
        transition: ease-out 0.7s;
        position: absolute;
        top: 70%;
        right: -5%;
    }
    .sub-text-container3{
        transition: ease-out 0.7s;
        position: absolute;
        top: 90%;
        left: -2%;
    }
    .sub-text-container4{
        transition: ease-out 0.7s;
        position: absolute;
        top: 90%;
        right: 0%;
    }
    .sub-text-container5{
        transition: ease-out 0.7s;
        position: absolute;
        top: 90%;
        left: 10%;
    }

    .introduce-wraper{
        transition: ease-out 0.7s;
        max-width: 1500px;
        display: flex;
        align-items: center;
        flex-direction: column;
        color:#dfd3c3;
        margin-bottom: 13%;
    }
    .introduce-text{
        /* font-size: 3.6rem; */
        font-size: 3vw;
        font-weight: 700;
        text-align: center;
    }
    .introduce-text-container{
    }

    .roadpath-list-title{
        margin-top: 13%;
        width: 80vw;
        /* max-width: 1300px; */
        .title-text{
            font-family: 'Romelio';
            /* width: 100%; */
            font-size: 5vw;
            font-weight: 900;
            color:#dfd3c3;
            padding-left: 3%;
            /* text-align: center; */
        }
    }

    .road-list-title{
        margin-top: 13%;
        width: 80vw;
        /* max-width: 1300px; */
        .title-text{
            font-family: 'Romelio';
            width: 100%;
            font-size: 5vw;
            font-weight: 900;
            color:#dfd3c3;
            text-align: center;
        }
    }

    .road-list-title-left{
        /* margin-top: 13%; */
        margin-top: 9%;
        width: 80vw;
        /* max-width: 1300px; */
        .title-text{
            font-family: 'Romelio';
            width: 100%;
            text-align: center;
            font-size: 5vw;
            font-weight: 900;
            color:#dfd3c3;
            text-align: center;
        }
    }

    .road-list-title-right{
        /* margin-top: 13%; */
        margin-top: 9%;
        width: 80vw;
        /* justify-content: right; */
        /* align-items: right; */
        /* max-width: 1300px; */

        .title-text{
            font-family: 'Romelio';
            width: 100%;
            text-align: center;
            font-size: 5vw;
            font-weight: 900;
            color:#dfd3c3;
            text-align: center;
        }
    }

    .small-stack-title{
        margin-top: 9%;
        width: 80vw;

        .title-text{
            font-family: 'Romelio';
            width: 100%;
            text-align: center;
            font-size: 5vw;
            font-weight: 900;
            color:#dfd3c3;
        }
    }

    .small-stack-title{
        margin-top: 6%;
        width: 80%;
        max-width: 1300px;
        .title-text-right{
            font-family: 'Romelio';
            width: 100%;
            font-size: 5vw;
            font-weight: 900;
            color:#dfd3c3;
            text-align:right;
        }
    }
    

    .road-list{
        margin-top: 7%;
        margin-bottom: 33%;
        list-style-type: none; /* Remove bullets */
        width: 80%;
        /* max-width: 1300px; */

        .road-line{
            width: 100%;
            height: 4px;
            background: #dfd3c3;
            transition: width .5s;
            /* max-width: 1300px; */
        }

        .road-content{
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 1.39vw;
            line-height: 1.4;
            margin: 4.32vh 0;
            color: #dfd3c3;
        }
    }

    .topmargin{
        margin-top: 1%;
    }
    .invisible-word{
        visibility:hidden;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 1.39vw;
        line-height: 1.4;
        margin: 1.3vh 0;
        /* margin-top: 1.62vh; */
        color: #dfd3c3;
        padding-left: 0%;
        font-weight: 500
    }

    .stack-content-title{
        font-weight: 900;
        font-size: 1.99vw;
        text-align: center;
        /* margin: 3.32vh 0; */
    }
    .stack-content-wraper{
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction:column;
        width: 100%;
        height:100%;
        /* padding-bottom: 0%; */
    }
    table {
        width: 100%;
        text-align: center;
        td{
            width: 50%;
            /* text-align: center; */
            font-size: 1.39vw;
            line-height: 1.9;
            color: #dfd3c3;
            font-weight: 500
        }
    }

    .AI-stack-container{
        margin-top: 3%;
        margin-bottom: 3%;
        list-style-type: none; /* Remove bullets */
        width: 80vw;
        height: 39.9vw;

        transition: ease-out 0.7s;
        /* max-width: 1500px; */
        display: flex;
        align-items: center;
        /* justify-content:center; */
        /* flex-direction: column; */
        color:#dfd3c3;
        /* background: white; */

        .AI-stack-pic-wraper{
            width: 46%;
            height: 100%;
            /* background: red; */
            display: flex;
            align-items: center;
            justify-content: center;
            perspective: 1500px;
            transform-style: preserve-3d;
            
            .AI-stack-pic-container{
                opacity: 0;
                width: 100%;
                height: 100%;
                background: white;
                perspective: 1500px;
                transform-style: preserve-3d;
                will-change: transform;
                transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(34.5183deg) rotateY(34.5183deg) rotateZ(-24.5184deg) skew(0deg, 0deg);
                /* transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(34.5183deg) rotateY(-34.5183deg) rotateZ(24.5184deg) skew(0deg, 0deg); */

                img{
                    width: 100%;
                    height: 100%;
                }
            }

        }

        .AI-stack-info{
            display: flex;
            flex-direction: column;
            
            width: 54%;
            height: 100%;
            padding-left: 1%;
            padding-right: 1%;
            /* height: 36vw; */
            /* background: blue; */
                    
            .stack-line{
                width: 100%;
                height: 4px;
                background: #dfd3c3;
                transition: width .5s;
                /* max-width: 1300px; */
                margin-bottom: 1.3vh;
                margin-top: 1.3vh;
            }
            
            .stack-content{
                display: flex;
                /* align-items: center; */
                font-size: 1.39vw;
                line-height: 1.4;
                margin: 1.3vh 0;
                /* margin-top: 1.62vh; */
                color: #dfd3c3;
                padding-left: 3%;
                font-weight: 500
            }
        }
    }

    .small-stack-container{
        margin-top: 3%;
        margin-bottom: 3%;
        list-style-type: none; /* Remove bullets */
        width: 80vw;
        height: 23vw;

        transition: ease-out 0.7s;
        /* max-width: 1500px; */
        display: flex;
        align-items: center;
        /* flex-direction: column; */
        color:#dfd3c3;
        /* background: white; */

        .small-stack-pic-wraper{
            width: 36%;
            height: 100%;
            /* background: red; */
            display: flex;
            align-items: center;
            justify-content: center;
            perspective: 1500px;
            transform-style: preserve-3d;
            
            .small-stack-pic-container{
                opacity: 0;
                width: 100%;
                height: 100%;
                background: white;
                perspective: 1500px;
                transform-style: preserve-3d;
                will-change: transform;
                transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(34.5183deg) rotateY(-34.5183deg) rotateZ(24.5184deg) skew(0deg, 0deg);

                img{
                    width: 100%;
                    height: 100%;
                }
            }

            .small-stack-pic-container2{
                opacity: 0;
                width: 100%;
                height: 100%;
                background: white;
                perspective: 1500px;
                transform-style: preserve-3d;
                will-change: transform;
                transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(34.5183deg) rotateY(34.5183deg) rotateZ(-24.5184deg) skew(0deg, 0deg);

                img{
                    width: 100%;
                    height: 100%;
                }
            }

            .small-stack-pic-container3{
                opacity: 0;
                width: 100%;
                height: 100%;
                background: white;
                perspective: 1500px;
                transform-style: preserve-3d;
                will-change: transform;
                transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(34.5183deg) rotateY(-34.5183deg) rotateZ(24.5184deg) skew(0deg, 0deg);

                img{
                    width: 100%;
                    height: 100%;
                }
            }

            .small-stack-pic-container4{
                opacity: 0;
                width: 100%;
                height: 100%;
                background: white;
                perspective: 1500px;
                transform-style: preserve-3d;
                will-change: transform;
                transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(34.5183deg) rotateY(34.5183deg) rotateZ(-24.5184deg) skew(0deg, 0deg);

                img{
                    width: 100%;
                    height: 100%;
                }
            }

        }

        .small-stack-info{
            display: flex;
            flex-direction: column;
            
            width: 64%;
            height: 100%;
            padding-left: 1%;
            padding-right: 1%;
            /* height: 36vw; */
            /* background: blue; */
        
            .stack-line{
                width: 100%;
                height: 4px;
                background: #dfd3c3;
                transition: width .5s;
                /* max-width: 1300px; */
                margin-bottom: 1.3vh;
                margin-top: 1.3vh;
            }
            .stack-content{
                /* display: flex;
                align-items: center;
                justify-content: space-between;
                font-size: 1.39vw;
                line-height: 1.4;
                margin: 4.32vh 0;
                color: #dfd3c3; */
                
                display: flex;
                align-items: center;
                justify-content: space-between;
                font-size: 1.39vw;
                line-height: 1.4;
                margin: 1.3vh 0;
                /* margin-top: 1.62vh; */
                color: #dfd3c3;
                padding-left: 3%;
                font-weight: 500
            }
        }
    }

    .iorange{
        color:#FF9100;
    }

    .ired{
        color:#CC0000;
    }

    .iblue{
        color:#28A0FF;
    }

    .itorch{
        color:#FF4419;
    }

    .inumpy{
        color:#46D2D2;
    }

    .ipandas{
        color:#C0C0C0;
    }

    .ipurple{
        color:purple;
    }
    .igreen{
        color:greenyellow;
    }

    .ihtml{
        color:#FF6666;
    }
    .icss{
        color:#00CDFF;
    }
    .iscss{
        color:#E28FAD;
    }
    .ijs{
        color:#FFD700;
    }
    .its{
        color:#28A0FF;
    }
    .ijq{
        color:#003A9D;
    }
    .ireact{
        color:#00EBFF;
    }
    .ithreejs{
        color:#C3C8CD;
    }
    .iwebjs{
        color:#C8707E;
    }
    .iglsl{
        color:#0097AC;
    }
    .ipython{
        color:#8FBC8F;
    }
    .idjango{
        color:#00450c;
    }
    .idjangodrf{
        color:#A52A2A;
    }
    .iflask{
        color:#a7aaad;
    }
    .inginx{
        color:#00a32a;
    }
    .iuwsgi{
        color:#6B8E23;
    }
    .igunicorn{
        color:#005c12;
    }
    .inodejs{
        color:#74C600;
    }
    .iwebpack{
        color:#0092E0;
    }
    .imysql{
        color:#FFA500;
    }
    .ipostgreSQL{
        color:#0a4b78;
    }
    .imongodb{
        color:#228B22;
    }
    .idocker{
        color:#4f94d4;
    }
    .igit{
        color:#b32d2e;
    }
    .igithub{
        color:#c3c4c7;
    }
    .iec2{
        color:#FF7E00;
    }
    .iEB{
        color:#549000;
    }
    .is3{
        color:#B22222;
    }
    .iRDS{
        color:#1E90FF;
    }
    .ilambda{
        color:#DAA520;
    }

    .site-info-title{
        margin-top: 13%;
        width: 80%;
        max-width: 1300px;
        .title-text{
            font-family: 'Romelio';
            width: 100%;
            font-size: 5vw;
            font-weight: 900;
            color:#dfd3c3;
            text-align: center;
        }
    }
    
    .site-info-wraper{
        width: 80vw;
        height: 60vh;
        margin-top: 5%;
        margin-bottom: 23%;

        .road-line{
            width: 100%;
            height: 4px;
            background: #dfd3c3;
            transition: width .5s;
            /* max-width: 1300px; */
        }
    }

    .wrapper {
        /* width: 100vw;
        height: 70vh; */
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        }

        .slider {
        /* width: 1000px;
        height: 100px; */
        width: 100%;
        height: 36%;
        position: relative;
        /* background: white; */
        /* box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.2); */
        display: flex;
        align-items: center;
        overflow: hidden;
            .slide {
            height: 100px;
            display: flex;
            align-items: center;
            animation: slideshow 11s linear infinite;
            
                span{
                    display: flex;
                    font-family: 'Romelio';
                    font-size: 5vw;
                    margin: 0 3.6645vw;
                    color: #dfd3c3;
                }
            }
        }

        .slider2 {
        /* width: 1000px;
        height: 100px; */
        width: 100%;
        height: 36%;
        position: relative;
        /* background: white; */
        /* box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.2); */
        display: flex;
        align-items: center;
        overflow: hidden;
            .slide2 {
                height: 100px;
                display: flex;
                align-items: center;
                animation: slideshow2 11s linear infinite;
            
                span{
                    display: flex;
                    font-family: 'Romelio';
                    font-size: 5vw;
                    margin: 0 3.6645vw;
                    color: #dfd3c3;
                }
            }
        }

        @keyframes slideshow {
        0% { transform: translateX(0);}
        100% { transform: translateX(-100%);}
        }
        @keyframes slideshow2 {
        0% { transform: translateX(-100%);}
        100% { transform: translateX(0);}
        }

        .slider::before, .slider::after {
        /* height: 100px;
        width: 200px; */
        height: 100%;
        width: 15%;
        position: absolute;
        content: "";
        background: linear-gradient(to right, #161616 0%, rgba(255,255,255,0) 100%);
        z-index: 2;
        }

        .slider2::before, .slider2::after {
        /* height: 100px;
        width: 200px; */
        height: 100%;
        width: 15%;
        position: absolute;
        content: "";
        background: linear-gradient(to right, #161616 0%, rgba(255,255,255,0) 100%);
        z-index: 2;
        }

        .slider::before {
        top: 0;
        left: 0;
        }

        .slider::after {
        top: 0;
        right: 0;
        transform: rotateZ(180deg);
        }

        .slider2::before {
        top: 0;
        left: 0;
        }

        .slider2::after {
        top: 0;
        right: 0;
        transform: rotateZ(180deg);
        }
    

    .contact-section-wraper{
        margin-top: 30%;
        margin-bottom: 30%;
        width: 80vw;
        /* width: 80vw;
        height: 100vh; */
        /* background-color: aqua; */
        /* padding: 15vh 8.274vw 10vh 8.274vw; */

        .contact-box{
            display: block;
            font-size: 5.8571428571vw;
            line-height: .96;
            /* width: 40.662vw; */
            will-change: color;
            font-family: 'Romelio';
            color: #dfd3c3;
        }
        .contact-info{
            /* position: relative; */
            display: block;
            margin-top: 6%;
            text-align: right;

            span{
                font-size: 2vw;
                line-height: .96;
                /* width: 40.662vw; */
                will-change: color;
                font-family: 'Romelio';
                color: #dfd3c3;
                text-decoration: underline;
            }
            
        }

    }
    
`