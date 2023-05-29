
import  helmetImg  from '../assets/cricket-helmet.png';


export default function HowToPlay(lang) {

    return(
 
            <>
                <section id="howToPlay">

                    <div className="spacer white-bg">

                        <div className="container">

                            <h1 className="uppercase small-txt text-center black-txt font-strong">
                                { lang.lang.howToPlay }
                            </h1>

                            <div className="tutorials_wrap">
                                <div className="tutorials__col_1">
                                    Test Content for how to play

                                    {/* <div v-html="languages?.howToPlayResults" v-cloak> </div> */}

                                </div>
                                <div className="tutorials__col_2">
                                    <img src={ helmetImg } alt="wcup trophy" />
                                </div>
                            </div>

                        </div>

                    </div>

                </section>
            </>
      
    )
}


