import React from 'react'
// import Head from 'react/head'
import './mandir.css'
import dailyDarshan from "../../Assets/IMG-20210703-WA0077.jpg"


const mandir = () => {
  return (
    <>
            {/* <Head> */}
                <title>Mandir</title>
            {/* </Head> */}

            <div className="back">
                <div className="imageAndAboutKhatu">
                    <div className="imageOnLeft">
                        {/* <Image src="/Photos/IMG-20210703-WA0077.jpg" alt="Daily Darshan" width={500} height={800} /> */}
                        <img src={dailyDarshan} alt="Daily Darshan" width={500} height={800} />
                    </div>
                    <div className="aboutKhatu">
                        यह  मध्ययुगीन महाभारत का वर्णन है। भक्तों में से कई को यह जानना चाहिए कि पांच पांडव भाइयों में से सबसे
                        बड़ा युधिष्ठिर था, जिसे धर्मराज भी कहा जाता था, और सबसे बड़ा कौरव भाई दुर्योधन था, जो अधर्म और अविश्वास
                        की दर्पण छवि थी। बचपन से पांडवों और कौरवों के बीच शीत युद्ध चलता रहता था। युधिष्ठिर धार्मिकता का मार्ग
                        नहीं छोड़ सका, जबकि दुर्योधन पाप का मार्ग नहीं छोडा।दुर्योधन के अत्याचार की सभी सीमाएं पार हो गई जब
                        पांडवों को लक्ष्द्र (लाखों से बने घर) में रहने के लिए मजबूर किया गया था |
                        यह भगवान के आशीर्वाद के कारण था कि पांच पांडव अपने मां कुंती के साथ लक्ष्द्र से सुरक्षित रूप से बाहर आए
                        थे। दुर्योधन को उनके प्रमुख दुश्मन होने के बारे में जानते हुए, वे हस्तीनापुर वापस नहीं लौटे,वे जंगल में
                        रहने लगे। इसी अवधि के दौरान, एक रात में, एक घने जंगल में, मां कुंती, युधिष्ठिर, अर्जुन, नकुल और सहदेव
                        गहरी नींद में थे, भीम (ताकत का प्रतीक) सतर्कता से उनकी रक्षा कर रहा था।
                        उसी जंगल में, अपनी छोटी बहन हिडिम्बा के साथ हिडिंब नामक एक राक्षस रहता था।
                        यह  मध्ययुगीन महाभारत का वर्णन है। भक्तों में से कई को यह जानना चाहिए कि पांच पांडव भाइयों में से सबसे
                        बड़ा युधिष्ठिर था, जिसे धर्मराज भी कहा जाता था, और सबसे बड़ा कौरव भाई दुर्योधन था, जो अधर्म और अविश्वास
                        की दर्पण छवि थी। बचपन से पांडवों और कौरवों के बीच शीत युद्ध चलता रहता था। युधिष्ठिर धार्मिकता का मार्ग
                        नहीं छोड़ सका, जबकि दुर्योधन पाप का मार्ग नहीं छोडा।
                    </div>
                </div>

                <div className="mapCenter">
                    <div className="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d885.7490195920522!2d75.403317!3d27.364369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5fd00b23858e7dfd!2sKhatu%20Shyam%20Ji%20Sikar!5e0!3m2!1sen!2sin!4v1649187262937!5m2!1sen!2sin"></iframe>
                    </div>
                    <div className="mapContainer">
                        <div>
                            {/* <Image src="/Photos/teen-baan-img.png" alt="" width={100} height={100}/> */}
                            {/* <img src="/Photos/teen-baan-img.png" alt="" width={100} height={100} /> */}
                            <p>मेरा &nbsp; सर्वेश्वर &nbsp; मेरा &nbsp; श्याम</p>
                            {/* <Image src="/Photos/teen-baan-img.png" alt=""  width={100} height={100}/> */}
                            {/* <img src="/Photos/teen-baan-img.png" alt="" width={100} height={100} /> */}
                        </div>
                        <a href="https://goo.gl/maps/XtxHbcP64opNNqUN8" ><a className="directionLink" target="_blank">Get Directions</a></a>
                    </div>
                    
                </div>
            </div>
        </>
  )
}

export default mandir