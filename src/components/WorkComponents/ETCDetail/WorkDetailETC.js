
import React from 'react'

import { LinkStyleCom } from "../../../styles/jsStyles/LinkStyle";
// import Select from 'react-select'

//transition Animation
import { motion } from 'framer-motion'

//style
import { WorkDetailETCStyleCom } from "../../../styles/jsStyles/WorkStyles/WorkDetailETCStyle"

import pic1 from "../../../assets/images/work/ETC/barclays/barclays.jpg"
import pic2 from "../../../assets/images/work/ETC/barclays/barclays2.jpg"
import pic3 from "../../../assets/images/work/ETC/barclays/barclays3.jpg"
import pic4 from "../../../assets/images/work/ETC/barclays/barclays4.jpg"
import pic5 from "../../../assets/images/work/ETC/barclays/barclays5.jpg"
import pic6 from "../../../assets/images/work/ETC/barclays/barclays6.jpg"
import pic7 from "../../../assets/images/work/ETC/barclays/barclays7.jpg"
import pic8 from "../../../assets/images/work/ETC/barclays/barclays8.jpg"
import pic9 from "../../../assets/images/work/ETC/barclays/barclays9.jpg"
import pic10 from "../../../assets/images/work/ETC/barclays/barclays10.jpg"

function WorkDetailETC({history, match }) {

    // const userLogin = useSelector(state => state.userLogin)
    // const { userInfo } = userLogin

    // useEffect( () => {

    //     if(userInfo == null ){
    //         history.push('/warningscreen')
    //     }else{
    //         if( !userInfo.isAdmin){
    //             history.push('/warningscreen')
    //         }
    //     }
        
    // }, [history, userInfo])

    return (
        <>
                    <motion.div
                        initial = {{ translateY:60, opacity: 0 }}
                        animate = {{ translateY:0, opacity: 1 }}
                        exit={{ translateY:60, opacity: 0 }}
                        transition={{duration: 0.5}}
                    >
                    <WorkDetailETCStyleCom>
                        <div className="work-contents-container">
                            
                            {/* <ContentsBanner bannerTitle={"AI DETAIL"}/> */}

                            <div className="work-title-container">
                                
                                <div className="work-detail-info">
                                    <div className="work-info-category">Sports Industry</div>
                                    <div className="slash-box">/</div>
                                    <div className="work-info-published">Facility</div>
                                    <div className="slash-box">/</div>
                                    <div className="work-info-author">column</div>
                                    <div className="slash-box">/</div>
                                    <div className="work-info-visit">Comunity</div>
                                </div>
                                <div className="work-detail-title">
                                    <span>Window For Communication Selling Experience and Culture</span>
                                    <span>프로농구경기장, 경험과 문화를 파는 소통의 창구</span>
                                </div>

                            </div>

                            <div className="work-contents">
                                <div className="project-purpose-container">
                                    <div className="project-purpose-title">프로농구경기장, 경험과 문화를 파는 소통의 창구로 진화하라!</div>
                                    <div className="project-purpose-content"> 
                                    <p>
                                        &nbsp;&nbsp;2017년 10월 14일, 드디어 국내 농구 팬들이 기다리고 또 기다리던 한국프로농구리그 KBL이 개막하였다. 필자도 열렬한 농구 팬 중 한 명으로서, 기쁜 마음을 안고 고양 오리온스팀과 LG 세이커스팀이 맞붙은 개막전을 관람하기 위해 경기 고양체육관을 방문하였다. 하지만 필자가 고양체육관에 들어갔을 때, 가장 먼저 느낀 것은 설명할 수 없는 부족함과 허전함이었다. 이 불편한 감정은 경기 관람이 끝나고 집에 도착할 때까지 떨칠 수가 없었다. 그리고, 이러한 감정은 필자가 경기장에서 말 그대로 ‘경기(競技)’하나만 보고 돌아왔다는 점에서 일어났다는 것을 금방 깨달았다. 또한, 고양 체육관에 방문하기 전, 마지막으로 방문한 경기장이 단순한 경기장을 넘어서 ‘문화복합체’라고 평가 받는, 미국 뉴욕(New York)시 브루클린(Brooklyn)에 위치한 바클레이스 센터(Barclays Center)였다는 점도, 필자가 비교적 큰 공허함을 느끼는데 한몫을 하였다.
                                        <br/><br/>
                                        현대에는 소비자들이 소유보다는 경험을 중요하게 생각하면서, 경험을 사고파는 시대가 되었다. 요즘 사람들은 집 앞 블록마다 자리 잡은 수많은 카페들은 모두 제쳐두고, 한, 두 시간을 기꺼이 감수해가며 새로 생긴 카페들을 방문한다. 이는 소비자들이 카페에서 그저 커피를 소비하는 것이 아니라, 특정 카페에서만 찍을 수 있는 특별한 사진, 카페만의 분위기, 카페가 생겨난 특별한 과정까지 모두 소비하기 때문이다. 여기에 SNS(Social Network Service)가 발전하여 사람들이 자신의 경험을 과시할 수 있는 수단이 제공되자, ‘경험 소비’에 대한 소비자들의 욕구는 그야말로 극에 달하고 있다. 이러한, 소비자들의 경향은 공연 산업에서도 그대로 반영된다. 이전에는 그저 훌륭한 공연을 만드는 것에 집중했다면, 이제는 볼거리, 먹거리 그리고 놀 거리까지 모두 고려하여 고객들의 경험을 극대화해야 하는 상황이다(이동준, 2015).
                                        <br/><br/>
                                        다시 돌아와서, 필자가 고양체육관에서 느낀 허전함은 바로 이러한 현대 소비자들의 욕구를 제대로 반영하지 못한, 고양 체육관의 경험적인 서비스 제공에서의 ‘결핍(缺乏)’이 원인이었던 것이다. 사실, 이러한 현대 소비자 트렌드를 한국프로농구팀들이 적절히 따라가지 못하고 있는 실정은, 한국프로농구협회(KBL)의 운영정책들을 보면 어느 정도 예견된 일이었다. 가장 큰 원인은 바로 한국프로농구협회(KBL)가 여전히 모든 정책의 초점을 ‘경기력’에만 맞추고 있다는 점이다. 아직도 한국프로농구협회(KBL) 수뇌부와 구단들은 경기 수준만 높아지면 관중이 늘어나고, 모든 문제점이 해결될 것이라는 일차원적이고 구시대적인 철학을 가지고 있다. 매년 한국프로농구리그 시즌이 끝나면, 수뇌부들에 의해 수시로 바뀌고 있는 외국인 신장제한과 출전제한에 대한 정책들이 이를 방증(傍證)하고 있다(2017, 김진성).
                                        <br/><br/>
                                        하지만, 정작 한국프로농구의 젊은 소비자들과 팬들은 이러한 정책에 관심이 없다. 아무리 경기력을 위해 이것저것을 손봐도 매년 비슷한 수준의 경기력이 나오기 때문이다. 한국프로농구리그(KBL)가 출범한 지는 무려 20년 차가 넘었는데, 아직도 스포츠 행정, 마케팅 전문가들의 부재(不在)가 이어지고 있다. 한국프로농구리그(KBL)의 수뇌부들은 농구선수 출신이다. 그들에게 현대 트렌드에 적합한 비즈니스적인 마인드를 기대하기는 힘들다. 이제는 한국프로농구리그(KBL)도 적극적으로 전문가들을 받아들이고, 프로농구의 환경을 현대 트렌드에 맞게 변화시켜야 한다. 그리고 무엇보다 각 구단의 경기장시설은 관중들의 ‘경험 소비’에 가장 큰 역할을 하는 환경요인이므로, 그 무엇보다 시급한 변화가 필요하다.
                                        <br/><br/>
                                        그렇다면, 미국프로농구리그(NBA)에 속한 브루클린 넷츠(BROOKLYN NETS)팀이 사용하고 있는 바클레이스 센터(Barclays Center)는 어떠한 시설을 갖추고 있기에, 단순한 경기장의 범주에서 벗어나 관중들에게 특별한 경험들을 선사하고 있는지, 필자의 방문 경험을 통해 분석해 보고자 한다. 또한, 분석을 통해 한국프로농구리그(KBL) 팀들의 경기장시설 문제점들을 알아보고, 단순한 경기장의 경계를 넘어 설 수 있는 몇 가지 전략을 제안해보고자 한다.
                                    </p>
                                    <div className="project-sub-title">1. 경험과 문화를 파는 바클레이스 센터(Barclays Center)</div>

                                        <p>
                                        &nbsp;&nbsp;브루클린(Brooklyn) 지하철역에서 내려 처음 바클레이스 센터(Barclays Center)를 마주한 순간을 잊을 수가 없다. 바클레이스 센터(Barclays Center)의 모습은 평소 필자가 생각하던, 경기장 디자인의 범주를 벗어나 있었다. 한국에서 경기장을 떠올리면 가장 먼저 생각나는 것은 ‘회색’ 이다. 칙칙한 회색과 판에 박힌 원형의 디자인은 우리나라 경기장을 대표하는 전형적인 모습들이다. 바클레이스 센터(Barclays Center)의 현대적이고 예술적인 외관은 앞에서 사진을 찍는 것만으로도, 팬들과 관중들에게 자부심을 심어주기 충분했다.
                                        <br/><br/>
                                        충격적인 사실은 두 경기장의 개장 시점이었다. 두 경기장이 개장된 시점이 약 1년밖에 차이가 나지 않았다. 위키백과에 따르면, 바클레이스 센터(Barclays Center)는 2012년 9월에 개장했고, 고양 체육경기장은 2011년 7월에 개장하였다. 결국, 우리나라 경기장들은 세월이 아무리 흘러도 동일한 디자인을 답습하며 심미적(審美的)인 발전이 이루어지지 않고 있는 것이다. 분명 예산적인 문제도 있었겠지만, 조금만 더 신경 쓰고 전문가들의 의견을 구했다면 같은 예산으로도 충분히 현대적이고 소비자들의 심미적인 욕구를 충족시켜 줄 만한 디자인이 나올 수 있었다고 생각한다.
                                        </p>

                                        <div className="img-caption-container">
                                            <img src={pic1} alt="pic1" />
                                            <div className="img-caption"> [사진 1.] 바클레이스 센터(Barclays Center)와 고양체육관의 모습. [출처] Barclyas Center 홈페이지, 고양오리온스팀 홈페이지.</div>
                                        </div>
                                        <p>
                                        처음 바클레이스 센터(Barclays Center)에 입장했을 때 쉽게 발견할 수 있었던 점은 바로, 관객들의 오감을 만족하게 해주는 다양한 시설들과 그것들을 이용한 콘텐츠들이 풍부했다는 것이었다. 경기장에 들어서자마자 한쪽에 보이는 것은 한 대형 스크린이었는데, 이 스크린은 팬들이 원하는 선수의 모습을 실제 크기로 구현해 주었다. 농구는 다른 스포츠 종목들에 비해 선수들과 일반인의 신체적 조건의 차이가 아주 크다. 그만큼, 선수들에 대한 팬들의 호기심도 아주 큰 편이다. 미국프로농구리그 NBA 선수들의 평균 키는 200cm를 넘지만, TV 중계로 보면 그들의 신체조건을 쉽게 가늠하기가 힘들다. 이러한, 스크린의 선수 구현 서비스는 팬들의 호기심을 충족시켜주고 그들과 바클레이스 센터와의 관계에 또 다른 이야기를 만들어준다. 또한, 스크린 앞에서는, 쉴새 없이 팬들의 핸드폰을 받아 사진을 찍어주는 직원이 있었다. 이 모습을 보며, 이 스크린과 찍은 팬들의 모습이 얼마나 많은 SNS에 돌아다니며 바클레이스 센터(Barclays Center)를 홍보해 줄지 쉽게 상상해 볼 수 있었다.
                                        <br/><br/>
                                        바클레이스 센터(Barclays Center)에 입점해 있는 다양한 레스토랑들과 셀 수 없이 많은 음식은 관객들의 미각을 책임지고 있었다. 세계 없는 국가의 음식이 없을 정도로 다양한 음식과 경기가 진행되고 있든 말든 수시로 좌석에서 나와 음식들을 사 먹는 관중들의 모습을 보면서, 그들이 정말 바클레이스 센터(Barclays Center)에 경기관람을 목적으로 온 건지 아니면 음식들을 즐기러 온 건지 헷갈리게 했다. 음식뿐 만이 아니라 경기장 내에는 다양한 종류의 주류를 파는 바(Bar)들도 있었다. 게다가, 맥주, 와인, 칵테일 등 모든 종류의 주류를 다루는 바(bar)부터 한 종류만을 전문적으로 다루는 곳까지 입점해있어 다양한 소비자들의 입맛을 만족시켜주고 있었다.
                                        <br/><br/>
                                        특히 경기장에 입점해있는 레스토랑과 경기 중에 그곳을 이용하는 사람들의 모습은 필자에게 무척 생소한 장면이었다. 처음에는 왜 굳이 경기장까지 방문해서, 현장에서 경기를 직접 보지 않고, 레스토랑에 설치된 스크린으로 경기를 보는 건지 이해가 되지 않았다. 하지만, 그들이 레스토랑에서 음식을 먹으며 사람들과 교류하고, 정장을 차려 입은 직장인들이 진지하게 이야기를 나누는 모습을 보며, 스포츠관람문화가 그들의 일상에 완벽하게 스며들었다는 것을 깨달을 수 있었다. 우리나라 사람들이 술과 커피 한잔을 핑계로 만나 친구들과 교감하거나 직장인과 비즈니스적인 소통을 하듯이, 그들에게 경기관람은 그들의 인간관계를 위한 매개체이며 일종의 핑계로 이용되고 있는 것이다.
                                        </p>

                                        <div className="img-caption-container">
                                            <img src={pic2} alt="pic2" />
                                            <div className="img-caption"> [사진 2] 선수를 구현해주는 스크린과 경기장에 입점해있는 다양한 음식점들. [출처] architecturalrecord.com/articles/7549-barclays-center</div>
                                        </div>
                                        <p>
                                        바클레이스 센터(Barclays Center)가 갖추고 있는 다양한 종류의 좌석 시설 또한, 관객들에게 다양한 경험의 선택지를 제공하고 있다. 크게 다섯 가지로 구분할 수 있는데, 먼저 1층부터 3층까지 설치되어있는 기본적인 일반석부터 경기 코트 인근에 있는 코트사이드(courtside)좌석, 개인적인 테이블 좌석에서 단계별로 제공되는 음식을 먹으며 경기를 관람할 수 있는 Loge Box 좌석, 뷔페와 바(bar)가 함께 있어 자유롭게 돌아다니며 음식을 즐기고 경기를 관람할 수 있는 클럽(Club) 좌석, 파티와 비즈니스용으로 이용할 수 있는 스위트(Sweat)룸이 있다. 각 좌석들은, 더 자세히 살펴보면 위치마다 좌석이 세분화되어 있다. 스위트(sweat)룸만 해도 종류가 3가지이며 총 70개가 넘는 방들이 구비되어있다. 이렇게 많은 종류의 좌석 시설들이 제공되다 보니, 제각각의 다양한 목적을 가진 사람들이 바클레이스 센터(Barclays Center)를 방문하고, 자신들의 목적에 알맞은 시설들을 이용하고 있다.
                                        </p>
                                        <div className="img-caption-container">
                                            <img src={pic3} alt="pic3" />
                                            <div className="img-caption"> [사진3] Club에서 제공되는 바(bar) 와 음식을 즐기며 경기를 관람하는 Loge Box 좌석. [출처] 바클레이스 센터(Barclays Center) 홈페이지.</div>
                                        </div>
                                        <p>
                                        결론적으로 필자가 느낀 점을 요약하자면, 바클레이스 센터(Barclays Center)에는 소비자들의 호기심을 풀어주고 추억을 만들어 줄 놀 거리, 그들의 다양한 입맛을 만족시켜 줄 먹거리 그리고 볼거리의 재미를 극대화 시켜줄 여러 가지 종류의 좌석 시설들이 갖추어져 있다는 것이다. 바클레이스 센터(Barclays Center)는 평소 필자가 생각하던 평범한 경기장이 아니었다. 그보다는 ‘농구경기’라는 제품을 제공하고 있는, 조금은 특별한 아울렛(Outlet)에 더 가깝다고 느꼈다. 그렇다면, 이제부터 필자가 느낀 바클레이스 센터(Barclays Center)와 고양체육관의 차이점이 무엇인지, 또 그 차이점을 통해 필자가 찾은 우리나라 프로농구 경기장의 문제점을 말해 보고자 한다.
                                        </p>

                                        <div className="project-sub-title">2. 바클레이스 센터(Barclays Center)를 통해 알아본, 한국 프로농구 경기장들의 문제점들</div>
                                        <p>
                                        고양체육관과 바클레이스 센터(Barclays Center)를 비교하면서 주목 한 고양체육관의 문제점에는 크게 두 가지가 있었다. 그리고, 우리나라 프로농구 경기장들의 시설현황을 살펴보았을 때 이러한 문제점이 비단, 고양체육관에서만 국한(局限)되는 문제점이 아니라 우리나라 모든 프로농구경기장에서 발견되는 문제점이라는 것을 발견할 수 있었다. 그렇다면 지금부터 고양체육관에서 느낀 시설 문제점을 토대로, 우리나라 프로경기장과 바클레이스 센터(Barclays Center)를 비교하여, 최종적으로 우리나라 프로농구경기장의 문제점을 도출(導出)해 보고자 한다.
                                        </p>
                                        <div className="project-small-title">1) 식음료 서비스시설의 부재(不在)</div>
                                        <p>
                                        우리나라 프로농구 경기장의 가장 심각한 문제점은 바로 식음료 서비스시설의 부재(不在)이다. 필자가 고양 체육관에 방문하였을 때도 이 부분을 뼈저리게 느낄 수 있었다. 체육관 안에는, 끼니를 해결 할 만한 마땅한 식당이 없음은 물론이고, 제대로 된 음식과 간식거리를 파는 매점들도 없었다. 경기장 입구에 있는, 단 하나의 편의점과 조그만 부스에서 파는, 언제 만들어진 건지 알 수 없는 정체 모를 피자만이, 관중이 음식을 살 유일한 기회였다.
                                        <br/><br/>
                                        그렇다면, 우리나라 다른 프로농구경기장의 상황은 어떠한지 살펴보자. 조사결과 대부분 경기장이 편의점 수준의 매점만을 갖추고 있음을 확인할 수 있었다(2017, KBL각 구단 홈페이지). 그나마, SK 나이츠의 홈 경기장인 잠실 학생 체육관이 여러 종류의 음식을 제공하고 있다고 하기에, 필자가 2차 방문 조사를 하였다. 하지만 방문조사 결과, 음식 판매 대부분이 경기장 내에서 이루어지는 것이 아니라 종합 경기장 역에서부터, 경기장 입구까지 늘어선 노점상에서 이루어지고 있음을 확인할 수 있었다. 노점상이 판매하는 음식 또한 술, 쥐포, 견과류와 같은 한정된 음식이었다. 경기장내의 매점에서도 타 구장들보다 여러 음식을 팔고 있었지만, 여전히 종류가 제한적이었을 뿐만 아니라, 많은 수의 관중을 감당할 수 있는 규모도 아니었다.
                                        </p>
                                        <div className="img-caption-container">
                                            <img src={pic4} alt="pic4" />
                                            <div className="img-caption"> [사진4] 잠실 학생 체육관 앞에 늘어선 노점상과 제한적인 메뉴를 가지고 있는 매점</div>
                                        </div>
                                        <p>
                                        관중들이 무언가 돈을 내고 소비하고 싶어도 경기장이 기회 자체를 제공하지 않는 것이다. 이것이 진정 한국프로농구의 인기하락을 걱정하고, 경기장 운영 적자에 하소연하는 KBL의 서비스 정신 인지 두 눈을 의심했다. 더 큰 문제는 음식을 산다 해도, 그것들을 섭취하면서 경기를 관람하기에는 좌석 시설이 너무도 좁고 열악했다는 것이다. 필자가 구매한 좌석이 일반 좌석 중 가장 비싼 특석이었지만, 앞 옆 좌석들과 너무 가까이 붙어있어 음식을 섭취하면서 경기를 관람하기에는 무리였다. 한국 프로스포츠협회에서 발간한 ‘2016 프로스포츠 고객 성향조사 보고서’에서 시행된 ‘관람 만족도 요인’에 대한 조사를 살펴보면, ‘팀의 응원문화’에 대한 만족도 점수가 가장 높았던 반면 ‘식음료 구매’에 대한 만족도는 ‘주차 시설’ 과 함께 상대적으로 가장 낮은 점수를 받은 것으로 나타났다(2017, 최재용). 이 말은 즉, 관객들이 스포츠경기장에 더 다양한 식음료 서비스와 시설을 기대하고 있으며, 언제든 식음료 서비스를 위해 지갑을 열 의향이 있다는 것을 증명하는 것이다.
                                        <br/><br/>
                                        지금 세계 시장에서의 승패는, 누가 먼저 소비자들의 숨어있는 욕구들을 찾아내어, 그것을 충족시켜 줄 서비스를 제공하느냐에 달려있다. 이러한 경쟁 시장에서 프로농구리그가 노골적으로 나타나는 소비자들의 욕구마저 충족시키는데 게을리하고 노력을 보여주지 않는다면, 농구 팬들에게서 더 많은 지원과 응원을 받을 수 없는 것은 당연한 일이다.
                                        </p>
                                        <div className="project-small-title">2) 제한적인 좌석 선택권</div>
                                        <p>
                                        제한적인 좌석 시설 또한 경기장의 큰 문제점이었다. 고양체육관이 제공하고 있는 좌석 시설의 종류는 일반석과 테이블 석 그리고 스카이박스 단 세 종류뿐이었다. 그리고 각 좌석이 관중들에게 제공할 수 있는 특별한 점은 전혀 없었다. 사실상 일반 관중들이 이용할 만한 좌석은 스카이박스를 제외하고 일반석과 테이블 석 2개라고 볼 수 있다. 하지만, 테이블 좌석에 특별한 서비스가 제공되는 것도 아니고, 관중이 직접 식음료를 살 수 있는 서비스도 없기 때문에, 테이블 좌석은 그저 조금 더 넓은 일반석에 지나지 않았다. 고양 오리온스팀이 제공하는 좌석 시설의 가격을 보면 스카이박스가 10만원이고, 일반석과 테이블석은 10,000원에서 25,000원의 범위를 넘어가지 않는다.
                                        <br/><br/>
                                        다른 KBL 10개의 농구 구단 경기장들도 고양 오리온스와 비슷한 상황이었다. 그나마, 부산 KT 소닉붐팀이 KBL 구단들 중 가장 많은 종류의 좌석시설을 제공하고 있는 것으로 확인되었다. 하지만 좌석의 가격 범위가, 일반인 기준 10,000원에서 50,000원의 경계를 벗어나지 못 했다(2017, KBL각 구단 홈페이지).
                                        <br/><br/>
                                        반면 바클레이스 센터(Barclays Center)의 좌석 가격을 보면, 일반석과 코트사이드(courtside) 단 두 가지 종류의 좌석 가격만 정규시즌 기준, 30달러($)에서 3,000달러($)까지 차이가 난다. 물론 좌석이 비싸다고 혹은 제공 좌석의 가격 범위가 넓다고 무조건적으로 소비자들에게 좋은 것은 아니다. 하지만 주목해야 할 점은, 이렇게 다양한 가격으로 제공되는 좌석시설들이 가격마다 확실한 차별점이 있다는 것이다. 바클레이스 센터(Barclays Center)는 고양 체육관처럼 그저 의자에 테이블만 설치해 놓고, 테이블 좌석을 판매하는 것이 아니다. 그 테이블을 통해 관객들에게 음식 서비스를 제공하고, 테이블에 설치된 미니 TV로 중계서비스를 제공하는 등, 관객이 테이블 좌석을 구매해야 할 확실한 이유를 제공하고 있다.
                                        </p>
                                        <div className="img-caption-container">
                                            <img src={pic5} alt="pic5" />
                                            <div className="img-caption"> [출처] KBL구단 홈페이지, Barclays Center 홈페이지.</div>
                                        </div>
                                        <div className="img-caption-container">
                                            <img src={pic6} alt="pic6" />
                                            <div className="img-caption"> [출처] KBL구단 홈페이지, Barclays Center 홈페이지.</div>
                                        </div>
                                        <p>
                                        이렇게 우리나라 프로농구 경기장이 가지고 있는 가장 큰 두 가지 문제점을 알아보았다. 요약하자면 관중들의 기대에 부응하지 못하는 경기장의 식음료 서비스와 차별점이 없는 좌석 시설들이다. 하지만, 그렇다고 해서, 현재 우리나라 경기 관람 문화와 환경들을 고려하지 않은 채, 경기장에 수많은 레스토랑들과 음식 시설들을 입점시키고, 마구잡이로 스위트(Sweat)룸을 만들 수는 없는 일이다. 그래서 필자는 현재 우리나라 프로농구경기장이, 장차 바클레이스 센터(Barclays Center)와 같이 관중에게‘경험’을 제공하는 시설로 발전하는데, 다리 역할을 할 수 있을 만한 해결책들을 제시해보고자 한다.
                                        </p>
                                        <div className="project-sub-title">3. 단순한 경기장을 넘어 경험과 문화를 제공하기 위한 개선책</div>
                                        <div className="project-small-title">1) 지자체와의 협력 그리고, 좌석과 식음료 서비스의 결합</div>
                                        <p>
                                        현재, 한국프로농구리그(KBL) 경기장들의 식음료 서비스는 전무(全無)한 상황이라 보는 것이 맞다. 그렇기 때문에, 경기장이 아주 기본적인 식음료 서비스 시설만 갖추어도, 엄청난 효과들을 볼 수 있는 상황이다. 그래서 필자는 한국프로농구 경기장들이 왜 기본적인 식음료 서비스도 제공하지 못하고 있는지, 그 이유에 대해 밝히는 것이 우선이라고 생각했다.
                                        <br/><br/>
                                        우리나라는 작년 스포츠산업 진흥법 개정을 통해, 지자체가 프로구단에 25년의 장기간의 경기장 임대를 가능하도록 했다. 하지만 아직도 지자체들은 경기장에 대한 통제권을 쥐고 놓지 않고 있는 실정이다. 구단들은 매점부터 광고판, 전광판까지 자율적으로 사용할 수 없다. 경기장 안에 입점해있는 매점도 모두 지자체가 임대 계약한 사업자들이다. 상황이 이러다 보니, 구단들이 경기장을 이용한 적극적인 마케팅을 펼치기도 힘든 실정이다(2017, 김창금). 요약하자면, 결국 경기장의 주인이 프로팀 구단이 아니다 보니, 구단이 경기장에 적극적으로 여러 시설을 유치하기가 힘든 상황이다. 이러한 상황 속에서, 프로농구리그 경기장이 소비자들을 만족시킬 식음료 시설들을 구비하는 데에는, 구단과 지자체와의 협력이 아주 중요한 것으로 나타났다.
                                        <br/><br/>
                                        지자체의 협력을 구하기 위해, 프로구단은 자신들의 파급효과를 강조할 필요가 있다. 프로구단이 지자체에 주는 이익은 비단 임대료와 같은 금전적인 부분뿐만이 아니다. 경기장 주변의 상권을 활성화하고, 지역주민에게 건전한 여가생활을 제공한다. 또한, 팀의 성적에 따른 미디어 노출효과로 지자체의 이미지 또한 향상시킬 수 있다. 만약 프로구단이 경기장을 자유롭게 활용하여 많은 관중을 불러 모은다면, 그만큼 지자체에 돌아가는 파급효과도 커지는 것이다. 지자체와 프로구단의 협력 관계에 있어, 현대캐피탈 배구단은 아주 좋은 예시이다. 충남 천안시는 구단이 유관순체육관을 이용하는 것에 대한 비용으로 전기세와 냉방비와 같은 최소한의 금액만 받고 있다. 그리고, 구단은 임대료 면제 등으로 발생한 수익들을 다시 지역주민들과 유소년들의 생활체육 활성화를 위해 투자한다(2017, 이정수). 프로농구구단도 지자체와 끊임없이 소통하고, 협력하여 서로 WIN-WIN이 되는 선순환 구조를 만들어야 한다.
                                        <br/><br/>
                                        하지만, 아무리 프로농구경기장이 이러한 제도적인 어려움이 있다 해도, 현재 식음료 서비스의 부재(不在)가 정당화되는 것은 아니다. 소비자들이 식음료 서비스에 대한 요구를 분명하게 표출하고 있는 가운데, 프로구단들은 경기장 앞에 푸드트럭들을 가져와서라도 그들의 요구를 충족시켜주는 데 최선을 다해야 했다. 그렇기 때문에, 필자는 현재 한국프로농구경기장의 테이블 좌석에 식음료 서비스를 결합하는 것을 제안하고 싶다. 앞서 언급했듯이, 현재 한국프로농구리그에 설치되어있는 테이블 좌석은, 특별한 부가적인 서비스를 제공받지 못한다는 점에서 일반 좌석과의 차별점이 미미했다. 그나마 부산 kt 소닉붐과 서울 SK 나이츠 등 몇 개의 구단들이 소량의 간식과 핫도그를 제공하고 있다. 하지만, 대부분의 관중이 큰 테이블 공간을 그저 물병 몇 개와 작은 핫도그를 놓는 용도로 쓰고 있다는 점에서 볼 때, 관중이 이 사용되지 않는 공간을 충분히 활용할 수 있도록 선택권을 주는 것이, 좌석에 대한 차별점을 주는 가장 좋은 방법이라고 생각한다. 그래서 관중이 테이블 석이 있는 특석을 예매하는 경우, 아래 표3과 같은 선택지를 주는 것이다.
                                        </p>
                                        <div className="img-caption-container">
                                            <img src={pic7} alt="pic7" />
                                            <div className="img-caption">[표3] 테이블이 포함된 특석을 예매할 때, 위와 같은 선택권을 함께 제공한다.</div>
                                        </div>
                                        <p>
                                        각 제품명을 선택하면, 그 제품의 세분화된 목록을 고를 수 있도록 제공하는 방식이다. 예를 들어, 치킨을 선택하면 프라이드 치킨, 양념치킨, 순살 치킨 등 부가적인 옵션이 제시되고, 커피를 선택하면 아메리카노(Americano), 카페라테(Caffe Latte) 등의 추가 메뉴가 보이도록 한다. 물론, 식음료 서비스를 희망하지 않는 관중은 선택을 안 할 수도 있다.
                                        <br/><br/>
                                        경기장이 식음료 서비스를 제공할 때 가장 문제가 되는 점은, 준비한 만큼 관중이 소비를 안 하는 상황이다. 하지만 구단이 위와 같은 서비스를 도입한다면, 사전에 제공해야 할 식음료의 수량을 확실히 알 수 있다는 점에서 특별한 위험성이 없다. 또한, 이러한 서비스는 기존의 테이블 좌석에 확실한 차별점을 부여할 수 있다.
                                        </p>
                                        <div className="project-small-title">2) 코트사이드(Court Side) 좌석과 하이파이브(High Five)존 설치</div>
                                        <p>
                                        두 번째로, 한국프로농구 경기장에 코트사이드(Court Side)좌석을 설치하는 것을 제안하고자 한다. 필자가 한국 프로농구 경기장의 좌석 시설에 대해 가장 안타깝게 생각하는 점은, 바로 팬들의 좌석과 선수들과의 접촉이 완전히 차단되어있다는 것이었다. 앞서 언급했듯이, 현대 소비자들은 ‘경험’을 중요시한다. 그리고, 스포츠 팬들이 가장 원하는 경험은 자신들이 좋아하는 스포츠 선수와의 교감과 교류일 것이다. 이러한 현대 관중들의 요구를 정확히 반영한 것이 바로 미국프로농구리그 경기장에 설치되어 있는 코트사이드(Court Side) 좌석이다. 이 좌석은 [그림 4]를 보면 알 수 있듯이, 말 그대로 경기 코트 바로 옆에 붙어있는 좌석이다. 코트사이드(Court Side)좌석은 언뜻 보면, 그저 코트 옆에 의자만 가져다 둔 성의 없는 시설로 비친다. 하지만, 이 좌석은 사실 선수들과 관중 사이에 끊임없는 교감과 교류가 일어나는, 아주 역동적인 자리이다. 선수들이 좋은 플레이를 펼쳤을 때는 선수와 함께 하이파이브(High Five) 하며 기뻐하고, 게임이 잘 풀리지 않을 때는 선수들을 직접 응원하고 위로한다. 공이 코트 밖으로 나가 생긴 짧은 시간 동안, 관중과 선수들이 이야기를 나누기도 한다.
                                        </p>
                                        <div className="img-caption-container">
                                            <img src={pic8} alt="pic8" />
                                            <div className="img-caption">[사진 5] 코트 사이드(Court Side)좌석의 팬들과 교감하는 선수들의 모습. [출처]ESPN PHOTO</div>
                                        </div>
                                        <p>
                                        때때로, 선수들이 아웃 되는 공을 살리기 위해 코트 사이드(Court Side)좌석 쪽으로 몸을 던지기도 하고, 그 과정에서 팬들은 선수들과 부딪혀, 들고 있던 음식들을 뒤집어쓰기도 한다. 하지만, 현대 관중들은 선수들과 부딪혀 낭비된 음식값과, 더럽혀진 옷을 세탁하는데 드는 비용에 연연하지 않는다. 다시 말하지만, 그들은 선수들과 충돌로 일어나는 이야기들을 더욱 소중하게 생각한다. 하지만, [그림 5] 한국프로농구리그(KBL) 경기장의 모습을 보면, 선수들과 관중의 소통이 완전히 차단되어 있다는 것을 발견할 수 있다. 그리고, 미국프로농구(NBA) 경기장 옆 코트 사이드(Courtside) 좌석이 설치된 공간이, 한국프로농구(KBL) 경기장에서는 아무 활용도 되지 않고, 허전하게 비어있다는 것을 발견할 수 있다. 이러한 상황들을 고려했을 때, 필자는 충분히 한국프로농구 경기장에도 코트 사이드(Court Side) 좌석을 설치할 수 있다고 생각한다.
                                        <br/><br/>
                                        우리나라 프로 농구 경기장들이 관중과 선수들과의 소통을 차단 하는데 에는 ‘안전성’의 이유가 가장 크다. 또한, 구단의 적자 운영이 당연시되는 우리나라 스포츠산업 분위기 속 에서, 구단들은 ‘하이 리스크, 하이 리턴(High Risk, High Return)’ 전략을 도입하기 꺼려하는 습성이 있다. 하지만, 현재 우리나라 프로농구 리그는 매년 관중 수가 줄어들고 있고, 인기는 현저히 하락하고 있는 추세이다. 이러한 상황 속에서, 리스크(Risk)가 두려워 아무것도 하지 않는다면, 프로 배구 리그에 ‘겨울스포츠의 꽃’ 자리를 넘겨주는 것은 시간 문제이다. 그렇기 때문에, 지금 우리나라 프로농구 리그는 ‘하이 리스크, 하이 리턴(High Risk, High Return)’ 전략을 받아들이되, 리스크(Risk)는 최소화 시키는 현명한 전략이 필요하다.
                                        <br/><br/>
                                        물론, 코트사이드(Court Side)좌석이 발생할 수 있는 관중의 안전적인 문제도 충분히 고려해야 한다. 최근, 미국프로야구리그(MLB)에서는 선수들의 파울 타구에 관중들이 부상을 입는 사례들이 잇따르면서, 추가적인 안전망 설치가 심각하게 고려되고 있다. 최근에는 뉴욕 양키스(New York Yankees)경기장에서 3살 여아가, 타자 토드 프래지어(Todd B. Frazier)가 때린, 105마일 파울 타구에 맞는 끔찍한 사고가 일어났다. 또한, 파울 타구에 시력을 잃은 60세 야구팬이 MLB 사무국과 시카고 컵스(Chicago Cubs)구단을 상대로 소송을 낸 사건도 있었다(2017, 이대호).
                                        <br/><br/>
                                        아직, 미국프로농구리그(NBA) 코트 사이드(Court Side)좌석에서는 심각한 부상이 발생한 사례는 없다. 하지만 지난 2015년, 미국 프로골퍼 제이슨 데이의 배우자가 코트 사이드(Court Side)좌석에서 농구를 관람하다, 르브론 제임스(Lebron James) 선수와 충돌한 사건이 있었다. 다행히 큰 부상 없이 퇴원하기는 했지만, 코트 사이드(Court Side)석의 안전성에 대해 경각심을 불러 일으키기 충분한 사례였다. 현재 경기장 안전시설에 대해 전 세계 스포츠 팬들의 이목이 쏠려있는 만큼, 우리나라 프로농구 구단도 코트사이드(Court Side)석 도입에 앞서 충분한 준비가 필요하다.
                                        <br/><br/>
                                        먼저, 코트 사이드(Court Side) 좌석의 모든 관중에게 좌석의 위험성에 대해 충분한 사전 안내를 해주어야 한다. 특히, 선수들과의 충돌로 인해 크게 다칠 수 있는 유아와 고령인의 입석을 검토할 필요성이 있다. 유아나 고령인이 입석하게 될 경우, 보호자에게 코트 사이드(Court Side) 좌석에서 발생할 수 있는 모든 위험한 상황에 대해 충분히 숙지시키고 사전에 철저히 교육할 필요성이 있다. 또한, 야구구장에서 파울타구가 날아갈 때, 관중을 위해 호각을 불어주듯, 코트 사이드(Court Side) 좌석의 관중이 위험할 수 있는 상황이라 판단되면, 관중의 주의를 환기시켜 줄 안내 요원을 배치하는 것도 좋은 방법이 될 수 있다.
                                        </p>
                                        <div className="img-caption-container">
                                            <img src={pic9} alt="pic9" />
                                            <div className="img-caption">[그림 6] 코트 사이드(Court Side)좌석의 관중과 충돌하는 선수의 모습과 경기 중 선수들과의 접촉이 모두 차단된 한국프로농구(KBL) 경기장 좌석시설의 모습. <br/>[출처] ESPN PHOTO, 고양오리온스 홈페이지.</div>
                                        </div>
                                        <p>
                                        세 번째, 제안은 바로 하이파이브(High Five)존 설치이다. 미국프로농구(NBA)나 한국프로농구(KBL)를 보다 보면, 2쿼터가 끝나거나 경기가 끝날 때쯤 관중들이 어디론가 급하게 달려가는 모습을 쉽게 볼 수 있다. 그들이 달려가는 곳은 바로 선수들이 경기장을 빠져나가는 통로의 입구이다. 늘 그런 것은 아니지만, 선수들은 보통 통로를 빠져나가면서 팬들이 내민 손을 가볍게 터치해 준다. 선수들의 손을 스치는 이 찰나의 순간을 위해, 있는 힘껏 달려가 손을 뻗는 관중들의 모습을 보면, 팬들이 얼마나 선수들과의 교감에 목말라 있는지 또 그것을 얼마나 가치 있게 생각하는지, 쉽게 확인할 수 있다. 그래서, 필자는 선수들이 입장하거나 퇴장하는 통로를, 줄로 된 펜스로 연장하여 좀 더 많은 팬에게 선수들과 교감 할 기회를 제공할 것을 제안한다.
                                        </p>
                                        <div className="img-caption-container">
                                            <img src={pic10} alt="pic10" />
                                            <div className="img-caption">[사진 7] 경기장에 선수들이 입장하고 퇴장하면서 팬들과 소통하는 장면. [출처] www.mavs.com</div>
                                        </div>
                                        <div className="project-sub-title">글을 맺으며</div>
                                        <p>
                                        지금까지, 관중들에게 다양한 경험과 교류의 기회를 제공하는 바클레이스 센터(Barclays Center)를 살펴보았고, 이를 통해 현대 소비 트렌드를 반영하지 못한 우리나라 농구경기장의 문제점을 알아보았다. 또한, 장차 한국농구경기장이 문화 복합적인 시설로 발전하기 위한, 몇 가지 개선책들도 제시해 보았다.
                                        <br/><br/>
                                        지금 한국사회는 세대간의 소통이 단절된 시대이다. 주말이 되면, 청소년들은 피시방으로 가고, 대학생들은 술집으로 가며, 부모님들은 산으로 향한다. 필자는 장차 우리나라 농구경기장들이 세대 간에 끊임없는 이야기를 파생시키고 교류의 기회를 제공하는 소통의 창구로 진화하기를 진심으로 바란다.
                                        </p>
                                        <div className="project-sub-title">References</div>
                                        <p>
                                        김진성(2017년 9월 14일). “위기의 KBL, WKBL, 3X3농구로 돌파구를 찾자”. 마이데일리.Retrieved October 21,2017 from
                                        <br/><br/>
                                        http://www.mydaily.co.kr/new_yk/html/read.php?newsid=201709140155527229&ext=na
                                        <br/><br/>
                                        김창금(2017년 6월 13일).적자는 쌓이고… 경기장 수입사업은 못하고. 한겨례. Retrieved October 21,2017 from
                                        <br/><br/>
                                        http://www.hani.co.kr/arti/sports/sports_general/798672.html
                                        <br/><br/>
                                        이동준(2015년 11월 20일). 중,단기 경기장 운영 수익을 프로구단에”. 축구저널.Retrieved October 21,2017 from
                                        <br/><br/>
                                        http://www.footballjournal.co.kr/news/articleView.html?idxno=3467
                                        <br/><br/>
                                        이대호(2017년 10월 10일). 파울 타구에 실명한 야구팬, MLB사무국,컵스 고소.연합뉴스. Retrieved October 21,2017 from
                                        <br/><br/>
                                        http://www.yonhapnews.co.kr/bulletin/2017/10/10/0200000000AKR20171010086600007.HTML?input=1195m
                                        <br/><br/>
                                        이정수(2017년 7월 20일).때 아닌 ‘연고지’ 논란, 구단만이 아닌 지자체의 노력도 필요. 스포츠서울. Retrieved October 21,2017 from
                                        <br/><br/>
                                        http://www.sportsseoul.com/news/read/533897l
                                        <br/><br/>
                                        최재용(2017년 4월 6일). 한국프로스포츠협회, ‘2016 프로스포츠 고객 성향 조사’보고서 발간. JTBC. Retrieved October 21,2017 from
                                        <br/><br/>
                                        http://news.jtbc.joins.com/article/ArticlePrint.aspx?news_id=NB11450555
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="biarrow-container">
                                <div className="arrow-container">
                                    {/* <div className="arrow-box">
                                        <LinkStyleCom to="/WorkScreenART" style={{textDecoration:"none"}}><LeftArrow/></LinkStyleCom>
                                        <span>&nbsp;&nbsp;PREV</span> 
                                    </div> */}
                                    <div className="arrow-box">
                                        <LinkStyleCom to="/WorkScreenETC" style={{textDecoration:"none"}}>BACK TO ETC</LinkStyleCom>
                                    </div>
                                    {/* <div className="arrow-box">
                                        <span>NEXT&nbsp;&nbsp;</span>
                                        <LinkStyleCom to="/WorkScreenART" style={{textDecoration:"none"}}><RightArrow/></LinkStyleCom>
                                    </div> */}
                                </div>
                            </div>

                        </div>
                    </WorkDetailETCStyleCom>
                    </motion.div>
        </>
    )
}

export default WorkDetailETC
