import React from 'react';
import { HOC } from '../HOC/HOC';
import { Link } from 'react-router-dom';
import post4 from '../../assets/images/New folder/thumb/digitaltransformation.png';
import post3 from '../../assets/images/New folder/thumb/globalcommunicationsolution.png';
import post1 from '../../assets/images/New folder/thumb/reclaimethlifecycle.png';
import post9 from '../../assets/images/New folder/smarthybridcarss.png';



function Hybridcards() {
    return (
        <div className="container mt-5 mb-5">
            {/* Breadcrumb navigation */}
            <div className="row justify-content-center">
                {/* Main content section */}
                <div className="d-flex align-items-center mb-4 fw-bold p-3" style={{ backgroundColor: '#f8f9fa' }}>
                    <Link to={"/"} className="text-muted me-2">Home</Link>
                    <i className="fa-solid fa-chevron-right me-2"></i>
                    <span className="Textcolor">Understanding the Advantages and Disadvantages of Hybrid buses</span>
                </div>
                <div className="col-lg-8 col-md-10">
                    <h1 className="mb-4">Understanding the Advantages and Disadvantages of Hybrid buses
                    </h1><hr /><br />
                    <h5> By <span className='text-danger'>Mercedes benz,</span> Septermber 16th, 2024 in <span className='text-danger'> Understanding the Advantages and Disadvantages of Hybrid buses</span></h5>
                    <br />
                    <img src={post9} className='w-100'  alt="" />
                    <br />
                    <br />

                    <section className="mb-4 d-flex flex-column gap-3">
                        <h3>🚗 What Are Hybrid Cars?</h3>
                        <p>
                            Hybrid cars are vehicles that use both an internal combustion engine (usually gasoline-powered) and an electric motor for propulsion. They are designed to achieve better fuel efficiency and reduce emissions compared to traditional gasoline-powered cars. Here are some key aspects of hybrid cars:
                        </p>
                    </section>

                    <section className="mb-4 d-flex flex-column gap-3">
                        <h3>🔍 How Does a Hybrid Car Work?</h3>
                        <p>
                            Hybrid cars operate by integrating a traditional internal combustion engine with an electric motor and battery system to optimize fuel efficiency and reduce emissions. Here’s a breakdown of how these components work together:
                        </p>

                        <h4>1. 🛠️ Dual Power Sources</h4>
                        <ul>
                            <li>
                                <strong>Internal Combustion Engine (ICE):</strong> This is the conventional petrol or diesel engine that powers the vehicle when needed, particularly at high speeds and for longer distances.
                            </li>
                            <li>
                                <strong>Electric Motor:</strong> Powered by a battery, this motor assists with propulsion, especially at low speeds and during acceleration. In some cases, it can power the vehicle independently for short distances.
                            </li>
                        </ul>

                        <h4>2. 🔋 Power Management System</h4>
                        <ul>
                            <li>
                                <strong>Automatic Switching:</strong> The hybrid car's power management system determines when to use the electric motor, the internal combustion engine, or both, based on driving conditions and the state of the battery.
                            </li>
                            <li>
                                <strong>Seamless Integration:</strong> This system ensures that the transition between the two power sources is smooth, optimizing performance and fuel efficiency.
                            </li>
                        </ul>

                        <h4>3. ♻️ Regenerative Braking</h4>
                        <ul>
                            <li>
                                <strong>Energy Recovery:</strong> When the driver applies the brakes or decelerates, regenerative braking captures kinetic energy that would otherwise be lost and converts it into electrical energy.
                            </li>
                            <li>
                                <strong>Battery Recharge:</strong> This electrical energy is used to recharge the battery, which powers the electric motor, further improving fuel efficiency.
                            </li>
                        </ul>

                        <h4>4. 🔋 Battery System</h4>
                        <ul>
                            <li>
                                <strong>Storage:</strong> The battery stores electrical energy generated by regenerative braking and, in some cases, by the internal combustion engine.
                            </li>
                            <li>
                                <strong>Power Supply:</strong> The electric motor draws power from the battery to assist with acceleration and provide electric-only driving in certain conditions.
                            </li>
                        </ul>

                        <h4>5. 🚘 Driving Modes</h4>
                        <ul>
                            <li>
                                <strong>Electric-Only Mode:</strong> At low speeds or when idling, the vehicle may operate solely on electric power, reducing fuel consumption and emissions.
                            </li>
                            <li>
                                <strong>Hybrid Mode:</strong> For more demanding driving conditions, such as acceleration or highway speeds, the vehicle uses both the electric motor and the internal combustion engine to maximize performance and efficiency.
                            </li>
                            <li>
                                <strong>Engine-Only Mode:</strong> During high-speed driving or when the battery needs recharging, the vehicle relies primarily on the internal combustion engine.
                            </li>
                        </ul>
                    </section>

                    <section className="mb-4 d-flex flex-column gap-3">
                        <h3>🌱 Why Choose Hybrid Cars?</h3>
                        <p>
                            By combining these technologies, hybrid cars enhance fuel efficiency, lower emissions, and offer a more sustainable driving option without the need for external charging, making them a practical choice for many drivers.
                        </p>
                    </section>
                    <section className="mb-4 d-flex flex-column gap-3">
                        <h3>🚗 Basics of Hybrid Cars</h3>
                        <p>
                            Hybrid cars offer a mix of traditional and modern automotive technology, combining internal combustion engines with electric motors to enhance fuel efficiency and reduce emissions. Here’s an overview of what you need to know about hybrid vehicles:
                        </p>
                    </section>

                    <section className="mb-4 d-flex flex-column gap-3">
                        <h3>1. 🔍 What Are Hybrid Cars?</h3>
                        <p>
                            Hybrid cars use both a conventional petrol or diesel engine and an electric motor powered by batteries. This dual power source helps improve fuel efficiency and lower CO2 emissions, making hybrids a more sustainable vehicle option.
                        </p>
                    </section>

                    <section className="mb-4 d-flex flex-column gap-3">
                        <h3>2. ⚙️ How Do Hybrid Cars Work?</h3>
                        <p>
                            Hybrid vehicles operate by seamlessly integrating a gasoline or diesel engine with an electric motor. The gasoline engine provides power and recharges the battery, while the electric motor assists with acceleration, operates at low speeds, and can function independently in certain conditions.
                        </p>
                        <p>
                            Regenerative braking converts energy from braking into electricity to recharge the battery, further enhancing fuel efficiency.
                        </p>
                    </section>

                    <section className="mb-4 d-flex flex-column gap-3">
                        <h3>3. 🌟 Advantages of Hybrid Cars</h3>
                        <ul>
                            <li><strong>Improved Fuel Efficiency:</strong> Hybrids generally offer better mileage compared to traditional vehicles, saving on fuel costs.</li>
                            <li><strong>Reduced Emissions:</strong> They produce fewer pollutants, contributing to cleaner air and a smaller environmental footprint.</li>
                            <li><strong>Tax Benefits:</strong> Many hybrid vehicles qualify for tax incentives and reduced road taxes.</li>
                            <li><strong>Regenerative Braking:</strong> This technology captures and reuses energy from braking, adding to overall efficiency.</li>
                            <li><strong>Enhanced Performance:</strong> The combination of electric and combustion power can result in better acceleration and a smoother driving experience.</li>
                        </ul>
                    </section>

                    <section className="mb-4 d-flex flex-column gap-3">
                        <h3>4. ⚠️ Disadvantages of Hybrid Cars</h3>
                        <ul>
                            <li><strong>Higher Purchase Price:</strong> Hybrids often have a higher initial cost compared to conventional cars.</li>
                            <li><strong>Limited Electric-Only Range:</strong> Most hybrids have a defined range on electric power alone, requiring the use of the gasoline engine for longer trips.</li>
                            <li><strong>Potentially Higher Maintenance Costs:</strong> The advanced technology in hybrids, including battery systems, can lead to increased maintenance and repair expenses.</li>
                            <li><strong>Charging Infrastructure:</strong> While hybrids don’t need external charging like fully electric vehicles, the charging infrastructure for electric vehicles might still be limited in some regions.</li>
                            <li><strong>Resale Value:</strong> The resale value of hybrid cars can be affected by concerns about battery life and maintenance costs.</li>
                        </ul>
                    </section>

                    <section className="mb-4 d-flex flex-column gap-3">
                        <h3>📋 Conclusion</h3>
                        <p>
                            Understanding these basics can help you evaluate whether a hybrid vehicle aligns with your driving needs and environmental goals.
                        </p>
                    </section>
                    <section className="mb-4 d-flex flex-column gap-3">
                        <h3>🔋 Prospects for Electric Vehicle Charging Infrastructure</h3>
                        <p>
                            Widespread adoption of electric vehicles (EVs) depends on the concurrent expansion of both accessible and affordable charging infrastructure. Early EV owners have generally resided in single-family homes with convenient access to home charging, leading to most charging being done privately. Meanwhile, public chargers have primarily been placed in urban areas, where their usage rates are higher. Moving forward, it will be crucial to install chargers in rural and suburban areas as well, to support the continued growth of EV adoption beyond city limits.
                        </p>
                    </section>

                    <section className="mb-4 d-flex flex-column gap-3">
                        <h3>🌍 Global Charging Infrastructure and Home Charging Access</h3>
                        <p>
                            In a 2024 survey of EV drivers in the United Kingdom, over 90% reported having access to home chargers, while a 2023 study found that only 55% of Indian consumers had similar access. Expanding charging infrastructure at workplaces and public locations will be crucial for boosting adoption among those without home charging options.
                        </p>
                    </section>

                    <section className="mb-4 d-flex flex-column gap-3">
                        <h3>⚡ Charging Speed and Interoperability</h3>
                        <p>
                            Charging speed, whether slow or fast, is a significant factor for consumers considering electric vehicles, particularly for long trips. Additionally, ensuring interoperability is essential for maximizing the benefits of charging infrastructure and services for a broad customer base.
                        </p>
                    </section>

                    <section className="mb-4 d-flex flex-column gap-3">
                        <h3>📈 Growth Projections for Public Charging Infrastructure</h3>
                        <p>
                            In the STEPS and APS scenarios, the global number of public charging points is projected to surpass 15 million by 2030, marking a fourfold increase from the nearly 4 million in operation in 2023. By 2035, this figure is expected to approach 25 million in the APS, representing a sixfold growth compared to 2023.
                        </p>
                    </section>

                    <section className="mb-4 d-flex flex-column gap-3">
                        <h3>🇨🇳 China's Charging Infrastructure</h3>
                        <p>
                            Among today’s leading EV markets, China has the most limited access to home charging, resulting in a more extensive rollout of public charging infrastructure. In 2023, China accounted for 70% of global public LDV charging and is expected to maintain a similar share in 2035 according to the STEPS scenario.
                        </p>
                        <p>
                            Although the availability of public chargers in China currently exceeds the global average (with fewer than 10 electric LDVs per public charging point), the government has recently introduced new guidelines to enhance the quality of charging infrastructure. In the APS scenario, the number of electric LDVs per public charging point is projected to rise from about 10 in 2023 to approximately 15 in 2035.
                        </p>
                        <p>
                            Currently, China boasts one of the highest proportions of fast chargers within its total public charging infrastructure, accounting for approximately 45%. By 2035, both the STEPS and APS scenarios project the stock of public fast chargers to reach around 7.5 million, nearly six times the number available in 2023. In the APS scenario, the number of slow chargers is expected to rise to 8.2 million by 2035.
                        </p>
                    </section>

                    <section className="mb-4 d-flex flex-column gap-3">
                        <h3>🇪🇺 European Charging Infrastructure</h3>
                        <p>
                            In Europe, the number of public LDV chargers is projected to grow to approximately 2.7 million by 2035 in both the STEPS and APS scenarios, up from around 730,000 in 2023. In both scenarios, about 80% of these chargers, or roughly 2.3 million, will be located within the European Union by 2035.
                        </p>
                        <p>
                            The United Kingdom aims to install at least 300,000 public chargers by 2030. In the APS scenario, the deployment of public chargers is somewhat slower but still provides sufficient coverage, with the total reaching 220,000 by 2030 and 300,000 by 2035.
                        </p>
                    </section>

                    <section className="mb-4 d-flex flex-column gap-3">
                        <h3>🇺🇸 United States Charging Infrastructure</h3>
                        <p>
                            The United States government has allocated nearly USD 50 million to support projects that enhance access to convenient charging, aiming to establish a national network of 500,000 public EV charging ports by 2030. According to the APS scenario, the number of public chargers is projected to reach 900,000 by 2030 and 1.7 million by 2035, with many of these likely funded by private investments and extending beyond highway corridors. This would result in approximately 55 electric LDVs per charging point by 2035.
                        </p>
                    </section>

                    <section className="mb-4 d-flex flex-column gap-3">
                        <h3>🔮 Future of EV Charging Infrastructure</h3>
                        <p>
                            By 2030, there will be 1.2 kW of charging capacity per electric LDV. By 2035, as the number of electric LDVs approaches 20 million in the APS, this will equate to over 60 electric LDVs per public charging point, up from about 30 in 2023.
                        </p>
                    </section>
                    <section className="mb-4 d-flex flex-column gap-3">
                        <h3>🔋 Proportion of Public Charging Set to Rise</h3>
                        <p>
                            The proportion of public charging is anticipated to increase over the next decade, but home charging will continue to be the predominant method. Data on the availability of home chargers is inconsistent, so our analysis estimates that home charging covers 50-80% of the electric LDV fleet, based on various surveys and the proportion of people living in dense urban areas.
                        </p>
                        <p>
                            As of 2023, we estimate there were 27 million home chargers globally, providing 150 GW of charging capacity and serving about 1.6 electric LDVs per charger. In the STEPS scenario, this stock is expected to grow more than tenfold by 2035, reaching over 270 million chargers. In the APS scenario, the number of home chargers is projected to approach 300 million by 2035.
                        </p>
                    </section>

                    <section className="mb-4 d-flex flex-column gap-3">
                        <h3>🔌 Growth of Private and Public Charging Stations</h3>
                        <p>
                            In the APS scenario, the number of other private chargers is anticipated to increase up to 14 times by 2035, whereas public chargers will grow sixfold. By 2035, public chargers in both scenarios are projected to provide greater charging capacity than private chargers outside of homes. Overall, there will be an estimated 1.2 electric LDVs per charging point, including both public and private chargers, in 2035 in the APS, up from just over 1 per point in 2023.
                        </p>
                    </section>

                    <section className="mb-4 d-flex flex-column gap-3">
                        <h3>🏭 Commercial Vehicle Charging</h3>
                        <p>
                            For commercial vehicle drivers, as with personal EV owners, overnight charging of electric HDVs at depots provides a convenient system for charging vehicles while they are stationary. This approach also benefits from the ability to charge at relatively low power rates due to the extended time available. To implement this strategy effectively, a nearly one-to-one ratio of depot chargers to electric HDVs is generally needed.
                        </p>
                        <p>
                            In the near term, the electrification of HDVs is expected to advance most rapidly in sectors with relatively short and predictable daily routes (under 200 km/day), such as city buses and urban or regional delivery services. Overnight depot charging is likely to address most of the charging requirements for these fleets.
                        </p>
                    </section>

                    <section className="mb-4 d-flex flex-column gap-3">
                        <h3>🔋 Future Charging Capacity for Heavy-Duty Vehicles (HDVs)</h3>
                        <p>
                            In the APS scenario, over 99% of HDV chargers are expected to be depot chargers by 2030, with about 10% of the electricity provided by opportunity chargers. By 2035, the use and deployment of opportunity chargers will increase significantly, with their numbers more than tripling from 2030 to reach 100,000.
                        </p>
                        <p>
                            In total, the installed capacity of HDV chargers is projected to reach 2,000 GW in the APS by 2035. For context, global installed renewable electricity capacity was roughly 3,600 GW in 2022. Although the average capacity of an opportunity charger is assumed to be about four times that of a depot charger, opportunity chargers will still account for less than 5% of the total installed capacity for heavy-duty chargers in 2035.
                        </p>
                    </section>

                    <section className="mb-4 d-flex flex-column gap-3">
                        <h3>🌐 Challenges in the EV Industry</h3>
                        <p>
                            Despite the initiatives by the Government of India and the potential of EVs, the sector faces substantial challenges, including a gap between the targeted and actual number of Public Charging Stations (PCS).
                        </p>
                        <p>
                            The Ministry of Power’s revised guidelines in the 2022 Charging Infrastructure for Electric Vehicles (EV) document set minimum targets for charging infrastructure, requiring stations every 25 kilometers along highways and roads and at least one station within a 3 km by 3 km grid.
                        </p>
                        <p>
                            However, a February 2024 report by the Ministry of Heavy Industries revealed that India has only 12,146 functional EV charging stations, falling significantly short of these targets. Bridging this gap is essential for promoting widespread EV adoption and achieving India’s ambitious environmental goals.
                        </p>
                    </section>
                    <section className="mb-4 d-flex flex-column gap-3">
                        <h3>🤝 Public-Private Partnerships: A Feasible Solution</h3>
                        <p>
                            The PPP model presents a promising approach to expanding EV charging networks in urban areas and advancing the electrification of commercial passenger fleets. However, despite private sector interest, concerns persist among fleet operators due to issues with government-run charging stations, including system malfunctions and underperforming units.
                        </p>
                        <p>
                            Additionally, some public charging stations at metro stations and fuel outlets remain non-operational because of software glitches, equipment failures, and power connectivity issues. The complexity of this infrastructure involves multiple stakeholders, including land-owning agencies, charging equipment suppliers, and State DISCOMs (Distribution Companies).
                        </p>
                    </section>

                    <section className="mb-4 d-flex flex-column gap-3">
                        <h3>🌟 Advantages of PPP Models</h3>
                        <ul>
                            <li>
                                <strong>Private Sector Investment:</strong> PPPs can provide significant private investment and funding, which are essential for the development and expansion of EV charging infrastructure.
                            </li>
                            <li>
                                <strong>Shared Risk:</strong> PPPs allow for the allocation or sharing of risks between the public and private sectors. This risk-sharing approach, combined with performance-based rewards and penalties, can improve the operational efficiency and maintenance standards of EV charging stations.
                            </li>
                            <li>
                                <strong>Reduction in Lifecycle Costs:</strong> Expanding the scope of PPPs to include both asset creation and service delivery has the potential to reduce overall lifecycle costs, including both construction and operational expenses in the long term.
                            </li>
                            <li>
                                <strong>Flexibility:</strong> PPP models can be customized to match the level of commitment and expertise of private sector participants. This flexibility enables the creation of tailored arrangements that align with the capabilities and interests of private investors, fostering increased participation and innovation in the EV charging infrastructure sector.
                            </li>
                        </ul>
                    </section>

                    <section className="mb-4 d-flex flex-column gap-3">
                        <h3>🏙️ Delhi’s Innovative Strategy for Charging Station Deployment</h3>
                        <p>
                            The Delhi Government has recently advanced its electric vehicle (EV) infrastructure by installing 900 charging points at 100 locations, offering the lowest global charging tariff of INR 2. This notable accomplishment was achieved through a PPP managed by the State Nodal Agency (SNA), Delhi Transco Ltd.
                        </p>
                    </section>

                    <section className="mb-4 d-flex flex-column gap-3">
                        <h3>💼 Advantages for Private Sector Participants</h3>
                        <ul>
                            <li>
                                <strong>Provision of Land:</strong> The government allocated land for establishing charging stations on a revenue-sharing basis, with parcels sourced from multiple public agencies.
                            </li>
                            <li>
                                <strong>Revenue Distribution:</strong> Concessionaires paid a fixed fee of INR 0.70 per kWh of power sold to the site-owning agency.
                            </li>
                            <li>
                                <strong>Infrastructure Expenses:</strong> The SNA covered the costs of electrical infrastructure, significantly easing the financial burden on the private entity.
                            </li>
                        </ul>
                    </section>

                    <section className="mb-4 d-flex flex-column gap-3">
                        <h3>⚡ Charging Equipment Manufacturers</h3>
                        <p>
                            Charging equipment manufacturers can generate revenue by producing and selling electric vehicle charging equipment through two primary approaches:
                        </p>
                        <ul>
                            <li>Providing standalone charging solutions for home, workplace, or public use.</li>
                            <li>Partnering with vehicle manufacturers to include the hardware as part of the vehicle package.</li>
                        </ul>
                        <p>
                            This involves offering a comprehensive solution for both public and private charging, including hardware and software installation. Additionally, manufacturers provide maintenance and support services. Notable charging infrastructure manufacturers include Delta Electronics, Mass Tech, ABB India, Exicom, Okaya, and RRT.
                        </p>
                    </section>
                    <section className="mb-4 d-flex flex-column gap-3">
                        <h3>🚗 Charging Station Operators</h3>
                        <p>
                            As a Charging Point Operator (CPO), you can generate revenue by managing a network of chargers. Your services may include electric vehicle charging, customer support, and network solutions (either standalone or in partnership with a Network Service Provider), among others.
                        </p>
                        <p>
                            You can select from various pricing mechanisms to charge electric vehicle users, including time-based fees, energy-based fees, fixed fees, and membership fees. Furthermore, the Ministry of Power has classified electric vehicle charging as a “service,” which exempts you from requiring a license under the Electricity Act 2003. Some companies operating as Charging Station Operators (CSOs) include EESL, Tata Power, Magenta Group, Fortum India, Volttic, and Charge Zone.
                        </p>
                    </section>

                    <section className="mb-4 d-flex flex-column gap-3">
                        <h3>🔋 Battery Reclamation</h3>
                        <p>
                            Electric vehicle batteries are primarily composed of lithium-ion and contain rare elements such as Lithium, Nickel, and Cobalt. As the electric vehicle industry expands, the demand for these rare elements is expected to rise. Since their availability is limited to a few countries, potential supply chain issues may emerge. Consequently, battery recycling will be essential for addressing these challenges.
                        </p>
                        <p>
                            Recycling will mitigate environmental impact and has the potential to lower the overall cost of batteries—and thus electric vehicles. By employing a circular economy model, recycling optimizes asset utilization and resource efficiency.
                        </p>
                    </section>

                    <section className="mb-4 d-flex flex-column gap-3">
                        <h3>💰 Battery Leasing</h3>
                        <p>
                            Starting a battery subscription business offers customers a lower upfront cost for electric vehicles and addresses a major concern for many buyers. In this model, batteries are provided to vehicle operators on a subscription basis, with charges based on daily usage or per kilometer rates.
                        </p>
                    </section>

                    <section className="mb-4 d-flex flex-column gap-3">
                        <h3>💳 Pay-as-you-use</h3>
                        <p>
                            A billing method where the user completes the payment process immediately before receiving a service, such as using a charging point, is known as Pay-as-You-Go. This model is most common among occasional users who do not have a long-term contract with the charge point operator. However, it can also be used by contract users who prefer direct payment instead of postpaid invoicing. Sun Mobility is a leading player in the Pay-as-You-Go business model.
                        </p>
                    </section>

                    <section className="mb-4 d-flex flex-column gap-3">
                        <h3>🔄 Battery-as-a-Service (BaaS)</h3>
                        <p>
                            Battery-as-a-Service (BaaS) leverages a circular economy model to maximize asset utilization while linking the transport and energy sectors. When a battery nears the end of its life, the BaaS provider either refurbishes it for use in applications like energy storage or behind-the-meter solutions, or recycles it to recover raw materials for new batteries. With global examples like NIO BaaS and local players such as Sun Mobility and Esmito, you have the opportunity to lead the BaaS market in your country.
                        </p>
                    </section>

                    <section className="mb-4 d-flex flex-column gap-3">
                        <h3>🔚 Conclusion</h3>
                        <p>
                            Hybrid vehicles represent a significant step forward in the evolution of automotive technology, offering a compelling mix of traditional internal combustion engines and electric power. They provide several benefits, including improved energy efficiency, reduced emissions, and enhanced performance, making them an attractive choice for environmentally conscious drivers.
                        </p>
                        <p>
                            As the automotive industry continues to evolve, hybrid vehicles will play a pivotal role in the transition toward more sustainable transportation. Advances in battery technology, greater adoption across various vehicle segments, and supportive government policies will further enhance their appeal and effectiveness.
                        </p>
                        <p>
                            While hybrid cars come with certain downsides, such as higher initial costs and limited electric-only range, their advantages make them a practical option for many drivers. They serve as a bridge between conventional vehicles and fully electric cars, helping to reduce environmental impact while offering flexibility and convenience.
                        </p>
                        <p>
                            In summary, hybrid cars are set to remain a key player in the automotive landscape, offering a balanced solution for those looking to improve energy efficiency and lower emissions while the industry moves toward greater electrification and sustainability.
                        </p>
                    </section>



                </div>

                {/* Right side static boxes */}
                <div className="col-lg-4 d-none d-lg-block sticky-section" style={{ marginTop: "200px" }}>
                    <h4>People's Favorites</h4><hr />
                    <div className="card mb-4 rounded-4">
                        <img src={post3} className="card-img-top custom-card-img rounded-4" alt="Description" />
                        <div className="card-body">
                            <h5 className="card-title">Worldwide perpetration of Augmentative and Indispensable Communication results request</h5>
                            <p className="card-text">In 2024, the geography of communicating apps is more dynamic and connected than ever ahead. Then are the most popular messaging apps that are shaping the way we communicate encyclopedically.</p><br />
                            <p>Created At : September 18, 2024 By www.infoihub.com</p><br />
                            <Link to={"/messaging"} className="learMoreBtn">Learn More</Link>
                        </div>
                    </div>
                    <div className="card mb-4 rounded-4">
                        <img src={post4} className="card-img-top custom-card-img rounded-4" alt="Description" />
                        <div className="card-body">
                            <h5 className="card-title">Pivotal Benefits of Digital Transformation for Businesses</h5>
                            <p className="card-text">What are the challenges businesses face during digital metamorphosis? In this blog, we’ll explore the pivotal benefits of embracing digital metamorphosis and how it can propel your business to new heights in moment’s digital period.</p><br />
                            <p>Created At : September 14th, 2024 By www.infoihub.com</p><br />
                  
                            <Link to={"/loan"} className="learMoreBtn">Learn More</Link>
                        </div>
                    </div>
                    <div className="card mb-4 rounded-4">
                        <img src={post1} className="card-img-top custom-card-img rounded-4" alt="Description" />
                        <div className="card-body">
                            <h5 className="card-title">how to get Reclaiming Health Through Lifestyle</h5>
                            <p className="card-text">While quick fixes and trendy results may feel charming, the most sustainable way to manage metabolic conditions and maintain overall health is by espousing a balanced life.</p><br />
                            <p>Created At : September 13th, 2024 By www.infoihub.com</p><br />
                            
                            <Link to={"/sexhealth"} className="learMoreBtn">Learn More</Link>
                        </div>
                    </div>
                </div>



            </div>

            {/* Responsive design for smaller screens */}
            <div className="row d-lg-none pt-4">
                <h4>People's Favorites</h4><hr />
                <div className="col-12">
                    <div className="card mb-4 rounded-4">
                        <img src={post3} className="card-img-top custom-card-img rounded-4" alt="Description" />
                        <div className="card-body">
                            <h5 className="card-title">Worldwide perpetration of Augmentative and Indispensable Communication results request</h5>
                            <p className="card-text">In 2024, the geography of communicating apps is more dynamic and connected than ever ahead. Then are the most popular messaging apps that are shaping the way we communicate encyclopedically.</p><br />
                            <p>Created At : September 18, 2024 By www.infoihub.com</p><br />
                            <Link to={"/messaging"} className="learMoreBtn">Learn More</Link>
                        </div>
                    </div>
                    <div className="card mb-4 rounded-4">
                        <img src={post4} className="card-img-top custom-card-img rounded-4" alt="Description" />
                        <div className="card-body">
                            <h5 className="card-title">Pivotal Benefits of Digital Transformation for Businesses</h5>
                            <p className="card-text">What are the challenges businesses face during digital metamorphosis? In this blog, we’ll explore the pivotal benefits of embracing digital metamorphosis and how it can propel your business to new heights in moment’s digital period.</p><br />
                            <p>Created At : September 14th, 2024 By www.infoihub.com</p><br />
                  
                            <Link to={"/loan"} className="learMoreBtn">Learn More</Link>
                        </div>
                    </div>
                    <div className="card mb-4 rounded-4">
                        <img src={post1} className="card-img-top custom-card-img rounded-4" alt="Description" />
                        <div className="card-body">
                            <h5 className="card-title">how to get Reclaiming Health Through Lifestyle</h5>
                            <p className="card-text">While quick fixes and trendy results may feel charming, the most sustainable way to manage metabolic conditions and maintain overall health is by espousing a balanced life.</p><br />
                            <p>Created At : September 13th, 2024 By www.infoihub.com</p><br />
                            
                            <Link to={"/sexhealth"} className="learMoreBtn">Learn More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}

export default HOC(Hybridcards)