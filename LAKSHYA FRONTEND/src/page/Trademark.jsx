
import React from "react";
import { Home, Info, FileText, HelpCircle } from "lucide-react"; // icons
import { Link } from "react-router-dom";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";


const title = "Trademark";

const Trademark = () => {
  return (
    <>
    <Header/>
     <PageHeader title={title} curPage={"Trademark"} />

      <div className="min-h-screen flex flex-col md:flex-row bg-white bg-opacity-10">

        {/* Sidebar */}
        {/* <aside className="hidden md:flex md:flex-col w-64 bg-gray-100/10 backdrop-blur-md border-r border-gray-300/20 shadow-xl p-6 space-y-6">
        <h2 className="text-2xl font-bold text-black text-center mb-6">Menu</h2>
        <nav className="flex flex-col gap-4">
          <a href="/" className="flex items-center gap-3 text-black hover:text-gray-700 transition">
            <Home size={20} /> Home
          </a>
          <a href="#" className="flex items-center gap-3 text-black hover:text-gray-700 transition">
            <Info size={20} /> About Trademark
          </a>
          <a href="#" className="flex items-center gap-3 text-black hover:text-gray-700 transition">
            <FileText size={20} /> Registration Process
          </a>
          <a href="#" className="flex items-center gap-3 text-black hover:text-gray-700 transition">
            <HelpCircle size={20} /> FAQs
          </a>
        </nav>
      </aside> */}

        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-6 md:p-10 flex justify-center">
          <div className="w-full max-w-md sm:max-w-lg md:max-w-4xl lg:max-w-6xl overflow-y-auto max-h-[90vh]">

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-8 text-black text-center">
              Trademark
            </h1>

            {/* All Boxes */}
            <div className="space-y-8">

              {/* Box Template */}
              <div className="bg-white/10 backdrop-blur-md border border-gray-300 rounded-2xl shadow-xl p-6 sm:p-8 md:p-10">
                <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6 text-black break-words">
                  What is a trademark? What all can be registered as a trademark? What are its advantages/objectives?
                </p>
                <p className="text-lg sm:text-xl md:text-2xl font-semibold text-black px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 rounded-xl shadow-lg leading-relaxed break-words">
                  Answer: Trademark (symbolizing a mark in trade) means a mark capable of being represented graphically and which is capable of distinguishing the goods or services of one person from those of others and may include the shape of goods, their packaging, and combination of colors. Essentially it is anything that identifies a brand to a common consumer. <br />
                  “Mark” includes a device, brand, heading, label, ticket, name, signature, word, letter, numeral, shape of goods, packaging, or combination of colors or any combination thereof. <br />
                  Examples: <br />
                  1. Distinctive General Word: Apple <br />
                  2. Fanciful designation: Kodak <br />
                  3. Distinctive Personal Names: Ford <br />
                  4. Slogan: Drink it to believe it (Pepsi), Hum Hain Na! (ICICI Bank) <br />
                  5. Device <br />
                  6. Number: 4711 cologne <br />
                  7. Picture: Lacoste logo <br />
                  Registering your trademark helps you secure exclusivity over your mark and gives legal rights over third-party infringement.
                </p>
              </div>


              {/* Second Box */}
              <div className="bg-white/10 backdrop-blur-md border border-gray-300 rounded-2xl shadow-xl p-6 sm:p-8 md:p-10">
                <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6 text-black break-words">
                  Who can apply for a trademark? Where should trademark applications be filed?              </p>
                <p className="text-lg sm:text-xl md:text-2xl font-semibold text-black px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 rounded-xl shadow-lg leading-relaxed break-words">
                  Answer:  An application can be made for registration of a trademark actually used or proposed to be used by any person claiming to be the proprietor of the trademark. In the case of a prior user of the mark, the concerned person is required to submit an affidavit along with evidence to support his claim of priority. In India, for the facilitation of the registration of the trademarks, the Trademark registry operates from five locations i.e. Delhi, Mumbai, Ahmadabad, Kolkata, and Chennai. In the case of Indian applicants, jurisdiction is decided based on the principal place of business of the applicant and in the case of foreign applicants, jurisdiction is based on where an applicant’s agent or attorney is situated.
                  More info about the jurisdiction and locations of the Trademark registry can be obtained by visiting here.


                </p>
              </div>

              {/* third box */}
              <div className="bg-white/10 backdrop-blur-md border border-gray-300 rounded-2xl shadow-xl p-6 sm:p-8 md:p-10">
                <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6 text-black break-words">
                  What are the general stages of trademark registration?              </p>
                <p className="text-lg sm:text-xl md:text-2xl font-semibold text-black px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 rounded-xl shadow-lg leading-relaxed break-words">
                  1.	An optional initial trademark search (identical search or similarity search) may be conducted on the government portal. <br />
                  2.	Once there is a go-ahead for trademark filing, an application for the Trademark will be made through relevant forms provided by the trademark office/ Registrar of Trademarks. <br />
                  3.	The application is then formally examined by the Indian Trade Marks Office, regarding the mark’s registrability and/or any similarity with existing marks. The mark is examined basically on three grounds i.e. distinctiveness, descriptiveness, and similarity to the prior marks. To qualify for registration, the mark should be distinctive, non-descriptive, and there shouldn’t be any similar prior marks. <br />
                  4.	In the post-examination process, if the trademark application is considered allowable, the trademark will be advertised in the Trade Marks Journal. <br />
                  5.	If an objection is raised, an official examination report will be issued to the owner of the mark. To overcome the objection, the trademark holder needs to file a proper legal reply to the Trade Mark Registry in order to overcome the same. <br />
                  6.	A reply has to be made to the trademark office in lieu of the reports that may be accepted or may be followed by a hearing. The applicant or agent if appointed is required to respond to the examiner’s objection(s) within a period of one month from the date of receipt of the Examination Report. Failure to respond to the examination report within this specified period can lead to the abandonment of the application <br />
                  7.	If the trademark office is satisfied that the trademark request complies with all the necessary provisions under the act, the mark is advertised before acceptance. The Registry may also call the holder for a personal hearing regarding the acceptability of the mark. <br />
                  8.	Once the mark is advertised in the trademark journal, it is open for a period of 4 months for third parties to oppose. <br />
                  9.	If no opposition is received during the specified period, the Trademark is deemed to be registered. <br />

                </p>
              </div>

              {/* forth box  */}
              <div className="bg-white/10 backdrop-blur-md border border-gray-300 rounded-2xl shadow-xl p-6 sm:p-8 md:p-10">
                <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6 text-black break-words">
                  Is the registration of a trademark compulsory?              </p>
                <p className="text-lg sm:text-xl md:text-2xl font-semibold text-black px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 rounded-xl shadow-lg leading-relaxed break-words">
                  Answer: No. Registration of a trademark is not compulsory. However, the registration is the prima facie evidence of the proprietorship of the trademark under registration. However, it is to be noted that no suit can be instituted for the infringement of unregistered trademarks. For unregistered marks, action can be brought against any person for passing off goods or services as the goods of another person or as services provided by another person.
                </p>
              </div>

              {/* fifth box */}
              <div className="bg-white/10 backdrop-blur-md border border-gray-300 rounded-2xl shadow-xl p-6 sm:p-8 md:p-10">
                <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6 text-black break-words">
                  Can a registered trademark be amended at later date?              </p>
                <p className="text-lg sm:text-xl md:text-2xl font-semibold text-black px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 rounded-xl shadow-lg leading-relaxed break-words">
                  Answer: Yes, the filed mark is allowed to be amended as per the provision of Section 22 of the Trademarks Act, which allows the amendment of the mark provided it does not amount to a substantial change in the character of the mark as such. Any superficial or insignificant character or feature of the said mark is allowed to be amended if a request is filed in the prescribed format along with 16 copies of the amended label mark.


                </p>
              </div>

              {/* sixth box */}
              <div className="bg-white/10 backdrop-blur-md border border-gray-300 rounded-2xl shadow-xl p-6 sm:p-8 md:p-10">
                <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6 text-black break-words">
                  What are the modes of filing trademarks internationally? Can a foreign applicant claim the priority based on an earlier application?              </p>
                <p className="text-lg sm:text-xl md:text-2xl font-semibold text-black px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 rounded-xl shadow-lg leading-relaxed break-words">
                  Answer: One can directly file a trademark in the jurisdiction of interest with or without taking priority of domestic mark. Another mode of international registration of a trademark is facilitated through the Madrid Protocol which acts as a vehicle to enable registration in multiple countries taking priority of one of the countries. This priority has to be claimed within six months. Please note that not all countries are members of the Madrid Protocol and allow filing through this system. A list of jurisdictions that can be accessed through Madrid Protocol for filing trademarks is available here
                </p>
              </div>

              {/* seventh box */}
              <div className="bg-white/10 backdrop-blur-md border border-gray-300 rounded-2xl shadow-xl p-6 sm:p-8 md:p-10">
                <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6 text-black break-words">
                  Once registered for what period of time, a trademark is effective? Can a trademark registration be renewed?              </p>
                <p className="text-lg sm:text-xl md:text-2xl font-semibold text-black px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 rounded-xl shadow-lg leading-relaxed break-words">
                  Answer: The registration of a trademark is valid for a period of 10 years. It can be renewed every 10 years, perpetually. In India, a renewal request is to be filed in FORM TM-R within one year before the expiry of the last registration of the trademark. The renewal fee for physical filling is 10,000 while for e-Filling is 9,000. If the renewal fee is not paid till the expiration of the last registration, a surcharge has to be paid along with the prescribed fee accompanied to form TM-R. If the renewal fee along with surcharge is not paid till the expiry of six months after the expiration of the last registration, the trademark is liable to be removed. Once removed, restoration of a trademark can be requested in form TM-R along with prescribed fees and applicable renewal fees (physical filling: 10,000, e-Filling: 9000). TM-R can be filed within one year from the expiration of the last registration of the trademark
                </p>
              </div>

              {/* eighth box */}

              <div className="bg-white/10 backdrop-blur-md border border-gray-300 rounded-2xl shadow-xl p-6 sm:p-8 md:p-10">
                <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6 text-black break-words">
                  Is the trademark liable for removal on the ground of non-use?              </p>
                <p className="text-lg sm:text-xl md:text-2xl font-semibold text-black px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 rounded-xl shadow-lg leading-relaxed break-words">
                  Answer: Yes, a registered trademark can be removed on the basis of non-use. Except as excused in clause 3 of section 47 of trademarks act, 1999, a trademark may be removed on the ground of non-use if:
                  1. That the trademark was registered without any bona fide intention and was not used till date three months before the date of the application for removal; or <br />
                  2. Trademark was not used for a continuous period of five years from the date of registration of trademark and application was made after three months from the expiry of five years. <br />


                </p>
              </div>

              {/* nintth box */}
              <div className="bg-white/10 backdrop-blur-md border border-gray-300 rounded-2xl shadow-xl p-6 sm:p-8 md:p-10">
                <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6 text-black break-words">
                  Is the sound or smell registrable as a trademark? How are these marks specified?              </p>
                <p className="text-lg sm:text-xl md:text-2xl font-semibold text-black px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 rounded-xl shadow-lg leading-relaxed break-words">
                  Answer: Yes, sounds or smells are registrable as a mark. However, they should be capable of being reproduced graphically and should be distinctive. For sound marks, the reproduction of the same has to be submitted in the MP3 format not exceeding thirty seconds’ length recorded along with a graphical representation of its notations. The smell can be represented as chemical formula along with the sample. Eg. the 4711 cologne
                </p>
              </div>

              {/* tenth box */}
              <div className="bg-white/10 backdrop-blur-md border border-gray-300 rounded-2xl shadow-xl p-6 sm:p-8 md:p-10">
                <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6 text-black break-words">
                  Is a three-dimensional mark registrable?              </p>
                <p className="text-lg sm:text-xl md:text-2xl font-semibold text-black px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 rounded-xl shadow-lg leading-relaxed break-words">
                  Answer: Yes, a three-dimensional mark is registrable.
                </p>
              </div>

              {/* eleventh box */}
              <div className="bg-white/10 backdrop-blur-md border border-gray-300 rounded-2xl shadow-xl p-6 sm:p-8 md:p-10">
                <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6 text-black break-words">
                  What is the classification of goods adopted in India?              </p>
                <p className="text-lg sm:text-xl md:text-2xl font-semibold text-black px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 rounded-xl shadow-lg leading-relaxed break-words">
                  Answer: International Classification of goods and services (Nice Classification) is adopted in India.
                </p>
              </div>
              {/* twelfth box */}
              <div className="bg-white/10 backdrop-blur-md border border-gray-300 rounded-2xl shadow-xl p-6 sm:p-8 md:p-10">
                <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6 text-black break-words">
                  What are the grounds for the refusal of registration of a trademark?              </p>
                <p className="text-lg sm:text-xl md:text-2xl font-semibold text-black px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 rounded-xl shadow-lg leading-relaxed break-words">
                  Answer: Section 9 of the trademarks act, 1999 provides absolute grounds, and section 11 provides relative grounds for refusal of registration of India. Trademark laws mandate trademarks to be distinctive and non-descriptive in order to get registered. The rationale behind this provision is that non-distinctive or descriptive marks can’t be granted monopoly being generic to the trade and are open for public use without any exclusive rights over the same. Some of the examples of non-distinctive or descriptive marks are given below: <br />
                  1. Dalal street for financial services <br />
                  2. Best restaurant for food services <br />

                </p>
              </div>

              {/* Repeat remaining boxes similarly with content unchanged, just text-black and bg-white/10 */}
              {/* You can copy your remaining 13 boxes and just replace classes with: */}
              {/* text-black, bg-white/10, border-gray-300, remove gradients and animate-pulse */}

            </div>

          </div>
        </main>
      </div>
      </>
      );
    
};

export default Trademark;
