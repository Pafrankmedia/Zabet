"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

const LEADERS = [
  {
    id: "david-okoruwa",
    name: "Dr. David Ehizuelen Okoruwa",
    role: "Lead/Managing Partner",
    image: "/assets/leader1.png",
    bio: `Dr. David Ehizuelen Okoruwa is a distinguished Nigerian environmental economist, sustainability specialist, and international development consultant with over fifteen years of professional experience in environmental policy, natural resource management, climate governance, sustainable development, and institutional strengthening.

He holds a PhD in Environmental/Public Sector Economics, with specialisation in Sustainability Economics, and has undertaken postdoctoral research at Johns Hopkins University, USA, focusing on Natural Resource Management and Measurement, Reporting and Verification (MRV) systems. His multidisciplinary expertise encompasses Integrated Landscape Management, climate finance, green policy, environmental economics, ESG reporting, climate resilience, sustainable land management, and evidence based environmental governance.

As Lead/Managing Partner of Zabet Trusthands, Dr. Okoruwa provides strategic leadership in the firm’s consulting, research, policy advisory, technical assistance, capacity development, and programme evaluation services. He brings together economic analysis, environmental science, policy development, institutional reform, and stakeholder engagement to design practical solutions to complex development challenges.

Over the past decade, Dr. Okoruwa has provided consultancy and technical advisory services to major international development institutions, including the World Bank, European Union, and African Development Bank, as well as Nigerian Federal and State Government institutions and private sector organisations. His experience covers policy formulation, project design and evaluation, institutional strengthening, climate and environmental governance, sustainable natural resource management, and development programme implementation.

Most recently, he served as a Mid Term Review Consultant for the World Bank and Federal Government of Nigeria’s Agro Climatic Resilience in Semi Arid Landscapes (ACReSAL) Project, one of Nigeria’s major climate resilience and sustainable landscape management interventions. His work also builds on extensive professional engagement with the Nigeria Erosion and Watershed Management Project (NEWMAP), providing him with substantial experience in watershed management, erosion control, climate resilience, ecosystem restoration, and community based natural resource management.

Dr. Okoruwa’s professional strength lies in translating complex environmental and development challenges into coherent policies, investment strategies, implementation frameworks, and measurable programmes. His approach integrates environmental sustainability with economic development, institutional effectiveness, climate resilience, and improved livelihoods, ensuring that sustainability interventions are both technically robust and socially and economically relevant.

Under his leadership, Zabet Trusthands continues to position itself as a credible Nigerian consulting and development advisory firm providing high quality, evidence based and internationally aligned solutions across environmental management, climate change, sustainable development, natural resource governance, Integrated Landscape Management, policy development, research, monitoring and evaluation, and institutional capacity strengthening.

Dr. Okoruwa is particularly recognised for his expertise in Integrated Landscape Management and sustainable development policy. His work emphasises the integration of ecosystems, productive landscapes, institutions, communities, markets, and climate considerations into coordinated development strategies that promote environmental integrity while strengthening economic opportunities and community livelihoods.

With his combination of academic scholarship, international exposure, policy experience, consulting expertise, and practical understanding of Nigeria’s development landscape, Dr. David Ehizuelen Okoruwa provides the strategic and technical leadership that underpins Zabet Trusthands’ commitment to delivering credible, innovative, and sustainable development solutions.`,
    highlights: [
      "PhD in Environmental Economics & Postdoc at Johns Hopkins University",
      "Consultant to World Bank, EU, African Development Bank & ACReSAL",
      "Specialist in Integrated Landscape Management, ESG & Climate Governance",
    ],
  },
  {
    id: "doofan-adzege",
    name: "Doofan Stephanie Adzege",
    role: "Programme Specialist",
    image: "/assets/leader2.png",
    bio: `Doofan Stephanie Adzege is a Nigerian programme specialist with extensive experience in education, governance, gender mainstreaming, and systems strengthening across humanitarian and development contexts. She has successfully led multi‑partner initiatives that improved institutional compliance, advanced safeguarding frameworks.

She holds a Bachelor’s degree in International Relations and a Master’s degree in Defence and strategic studies as well as Masters in Education Administration and Planning, complemented by professional certifications in Project Management, Monitoring & Evaluation, and Safeguarding. Her academic and professional qualifications provide a strong foundation for designing and managing complex programmes that integrate governance, leadership, climate change and gender‑responsive approaches.

As Programme Specialist at Zabet Trusthands, Doofan provides technical leadership in programme design, donor engagement, policy advocacy, and capacity development. She has contributed to the domestication of the Safe School Declaration, developed safeguarding SOPs, and strengthened partner organizations through localization projects and virtual learning hubs. Her expertise spans programme management, cohort‑based learning, accountability frameworks, and evidence‑based reporting systems using platforms such as CommCare and Google Classroom.

Doofan has worked with major international donors and partners including UNICEF, Education Cannot Wait (ECW), and Education Above All (EAA), ensuring accountability, sustainability, and measurable impact. Her professional strength lies in translating complex governance and education challenges into practical solutions that are inclusive, scalable, and sustainable.

Through her work, she continues to position Zabet Trusthands Koncerns Limited as a credible Nigerian consulting and development advisory firm, delivering high‑quality, evidence‑based solutions in education, governance, gender mainstreaming, and institutional capacity strengthening.`,
    highlights: [
      "Expert in programme design, safeguarding SOPs & governance frameworks",
      "Proven track record with UNICEF, ECW, and EAA donor initiatives",
      "Specialist in education systems strengthening & institutional localization",
    ],
  },
  {
    id: "viola-okoruwa",
    name: "Viola Okanemen Okoruwa",
    role: "Stakeholder & Communication Specialist",
    image: "/assets/leader3.png",
    bio: `Viola Okanemen Okoruwa is a development professional specialising in stakeholder engagement, strategic communication, field data collection, project coordination and development-sector documentation. She brings practical experience supporting multidisciplinary consulting assignments and engaging stakeholders across complex project environments.

At Zabet Trusthands Koncern Limited, Viola contributes to the delivery of development and environmental consulting assignments, supporting stakeholder engagement, field coordination, data collection, research, documentation and project communication.

Her recent experience includes supporting the World Bank- supported Agro - Climatic Resilience in Semi - Arid Landscapes(ACReSAL) Project, with field data collection and stakeholder - related activities across the 19 Northern States and the FCT.She also brings experience from the World Bank - supported Nigeria Erosion and Watershed Management Project(NEWMAP) through Tapincom Limited Nigeria, strengthening her practical understanding of environmental resilience, watershed management and community - focused development interventions.

  Viola’s strength lies in connecting stakeholders, field realities and project objectives.She combines strong communication and interpersonal skills with sound organisational ability, attention to detail and hands - on field experience to support inclusive, evidence - based and results - oriented development outcomes.

At Zabet Trusthands, she contributes to assignments across Integrated Landscape Management, climate resilience, environmental management, stakeholder engagement, research, data collection, monitoring and evaluation, and institutional strengthening.`,
    highlights: [
      "Directs multi-state regional consulting operations",
      "Specialist in agile digital systems & project lifecycle execution",
      "Ensures strict compliance with ISO & environmental standards",
    ],
  },
  {
    id: "etim-bassey",
    name: "Mr. Etim Essien Bassey",
    role: "",
    image: "/assets/leader4.png",
    bio: `Mr. Etim Essien Bassey is a Nigerian economist and academic with professional experience in economics, international economics, research, teaching, data management, accounting, and public-sector-related assignments. He is currently a Lecturer in the Department of Economics, Faculty of Social Sciences, University of Calabar, where he contributes to teaching, academic research, and the development of knowledge in economics.
  Mr.Bassey holds a Master of Science(M.Sc.) degree in International Economics from the University of Calabar, Cross River State, and a Bachelor of Science(B.Sc.) Honours degree in Economics, Second Class Upper Division, also from the University of Calabar.His academic training has provided him with a strong foundation in economic theory, international economics, monetary economics, public finance, development economics, and applied economic research.
His professional experience extends beyond academia.Prior to his current academic position, he worked as an Audit Trainee with Ubong Etuk & Co., Chartered Accountants, where he was involved in the audit of collections and remittances of taxes collected by selected banks on behalf of the Federal Inland Revenue Service(FIRS).This experience provided him with practical exposure to taxation, financial records, auditing procedures, revenue administration, and public - sector financial management.
As an economist and researcher, Mr.Bassey has demonstrated particular interest in monetary economics, international economics, exchange rate dynamics, agricultural economics, public debt, economic development, transportation, community development, and the relationship between economic policies and development outcomes in Nigeria.His research interests reflect a strong commitment to applying economic analysis to contemporary Nigerian development challenges.
    Mr.Bassey possesses practical competence in quantitative and computer - based research.His working knowledge includes EViews, Stata, and SPSS.These skills support his capacity to undertake quantitative analysis, econometric research, data processing, academic presentation, and evidence - based research.
In addition to his academic career, Mr.Bassey has gained valuable industry and development consultancy experience through his involvement in major environmental, climate - resilience, and sustainable development interventions in Nigeria.His professional engagement includes work relating to the Nigeria Erosion and Watershed Management Project(NEWMAP), where he participated in the impact assessment of the NEWMAP project in Ondo and Ekiti States.This experience provided him with practical exposure to project impact assessment, environmental and socioeconomic interventions, stakeholder engagement, field - based data collection, analysis of project outcomes, and assessment of the development effects of large - scale watershed and erosion - management interventions.
    Mr.Bassey has also contributed to the mid - term evaluation of the Agro - Climatic Resilience in Semi - Arid Landscapes(ACReSAL) Project, a major climate - resilience and sustainable landscape - management intervention in Nigeria.His work involved direct engagement with the evaluation process in states including Plateau and Gombe States, contributing to the assessment of project implementation, performance, outcomes, institutional arrangements, stakeholder participation, and progress toward project objectives.This experience has strengthened his practical understanding of climate resilience, sustainable landscape management, natural resource governance, community development, and monitoring and evaluation of development programmes.
His industry experience in NEWMAP and ACReSAL complements his academic background in economics by providing practical exposure to the application of economic, social, institutional, and environmental analysis to real - world development programmes.Through these engagements, he has developed an appreciation of the importance of evidence - based assessment in determining whether development interventions are achieving their intended socioeconomic and environmental outcomes.`,
    highlights: [
      "15+ years in digital engineering and green technologies",
      "Architect of industrial energy efficiency & IoT systems",
      "Fellow of the Nigerian Society of Engineers (FNSE)",
    ],
  },
  {
    id: "cassidy-agbor",
    name: "Associate Professor Cassidy Etta Agbor, PhD, MEd, LLB, BEd, Dip.",
    role: "Environmental Law, Environmental Education & Institutional Capacity Development Specialist",
    image: "/assets/leader5.png",
    bio: `Associate Professor Cassidy Etta Agbor is a distinguished Nigerian academic, environmental education specialist and legal professional with extensive experience in environmental education, environmental law, curriculum development, institutional management, research, human capacity development and higher education administration. He brings to Zabet Trusthands a multidisciplinary combination of law, environmental education, curriculum and instructional development, academic leadership and institutional capacity building, providing a strong foundation for addressing complex environmental governance and sustainability challenges.

Born on 5 June 1982 and from Isobendeghe in Boki Local Government Area of Cross River State, Nigeria, Associate Professor Agbor commenced his academic career at the University of Calabar on 19 August 2010. Over the course of his academic career, he has undertaken significant teaching, research, administrative and institutional development responsibilities.

His academic qualifications include a PhD in Curriculum and Instruction, Master of Environmental Education, Bachelor of Laws(LLB), Bachelor of Environmental Education(BEd), and Diploma in Adult Education with a focus on Industrial and Labour Studies.This interdisciplinary academic background gives him a distinctive capacity to examine environmental challenges from legal, educational, institutional and human capacity perspectives.

Associate Professor Agbor has held several leadership positions at the University of Calabar.He served as Acting Head of the Department of Environmental Education from 2023 to 2025 and subsequently served as Head of the Department of Hospitality and Tourism Management from 2025 to 2026. These responsibilities have strengthened his experience in institutional governance, academic programme administration, stakeholder engagement, staff coordination, quality assurance and organisational development.

As a researcher and academic supervisor, he has supervised and successfully graduated more than 15 PhD candidates and 25 Master’s degree students.He has also contributed significantly to the development of human capital in Nigeria through teaching, mentoring, postgraduate supervision and academic leadership.Over the course of his career, he has taught and supported the graduation of more than 500 students, many of whom have subsequently proceeded to national service and professional careers.

His research profile includes more than seven Scopus indexed publications and over 60 institutional publications, demonstrating sustained engagement with scholarly research and knowledge production.His multidisciplinary expertise is particularly relevant to environmental education, environmental governance, environmental law, sustainability, curriculum development, institutional capacity development and community oriented environmental management.

Within Zabet Trusthands, Associate Professor Cassidy Etta Agbor serves as an Environmental Law, Environmental Education and Institutional Capacity Development Specialist, contributing expertise to assignments involving environmental policy and legislation, environmental governance, regulatory and institutional frameworks, stakeholder capacity development, environmental awareness, sustainable land and natural resource management, curriculum and training development, and environmental compliance.

His legal training through the LLB qualification, combined with advanced expertise in environmental education and extensive academic and institutional leadership experience, enables him to contribute to the analysis of environmental legislation, regulatory frameworks, institutional mandates and governance arrangements.He is particularly well positioned to support the development and review of environmental policies, laws, regulations, implementation guidelines and institutional frameworks, while ensuring that these instruments are supported by appropriate stakeholder awareness and capacity development.

As part of Zabet Trusthands’ multidisciplinary consulting team, Associate Professor Agbor contributes to the firm’s commitment to delivering evidence based, legally sound, institutionally practical and socially responsive solutions for environmental governance, sustainable development and natural resource management.

Core Areas of Expertise

    * Environmental Law and Policy
      * Environmental Education and Awareness
        * Environmental Governance and Institutional Development
          * Environmental Policy and Legislative Review
            * Sustainable Development
              * Integrated Landscape Management
                * Natural Resource Governance
                  * Environmental Capacity Building and Training
                    * Curriculum and Instructional Development
                      * Stakeholder Engagement and Community Education
                        * Institutional Strengthening
                          * Academic and Professional Training
                            * Research and Knowledge Management
                              * Postgraduate Research Supervision
                                * Quality Assurance and Academic Programme Development
                                  * Human Capital Development`,
    highlights: [
      "Structured over $500M in green financing & climate credit facilities",
      "Specialist in ISSB, TCFD, and GRI sustainability reporting",
      "Senior advisor to multilateral development finance institutions",
    ],
  },
  {
    id: "becomson-ikaka",
    name: "Dr. Beconson Fredrick Ikaka",
    role: "Lead Partner, Public Sector & Policy Advisory",
    image: "/assets/leader6.png",
    bio: `Beconson Fredrick Ikaka, Ph.D. is a public administration scholar, development practitioner, public policy analyst, election administration consultant and strategic management professional whose career sits at the intersection of academia, public policy, research, institutional development and Human resource management. His professional journey reflects a deliberate commitment to understanding complex organizational and public-sector challenges, generating credible evidence and translating knowledge into practical strategies for improved institutional and development outcomes

He holds a Ph.D.in Public Administration from the University of Calabar, complemented by a Master of Science(M.Sc.) and Bachelor of Science(B.Sc.) degree in Public Administration.His academic training has provided a strong foundation in public sector management, governance, policy formulation and implementation, human resource management, development administration, research methodology, and institutional analysis.His scholarly orientation is further strengthened by professional training and certification in Planning for Monitoring and Evaluation from the Philanthropy university, enhancing his capacity in results- based planning, programme monitoring, performance measurement, evaluation, and evidence - informed decision - making.

    Dr.Ikaka currently serves as a Lecturer at the University of Cross River State, where he contributes to teaching, academic administration, quality research, student development, institutional assignments, and community development.In this capacity, he combines classroom teaching with scholarly inquiry and practical engagement, helping students develop analytical, research, administrative, and problem - solving competencies relevant to contemporary public and private sector environments.His role also reflects his broader commitment to using higher education as an instrument for human capital development, community transformation, and institutional advancement.

His academic career has also included teaching and academic experience at the Thomas McGettrick Institute of Technology, where he demonstrated an ability to work effectively within multidisciplinary teams, contribute to institutional decision - making, support academic quality processes, and translate complex concepts into accessible and practically relevant knowledge.

Beyond academia, Dr.Ikaka has participated in development - oriented assignments, research projects, experience in community development, advocacy, organizational practice and donor - supported interventions, giving him practical exposure to the realities of programme implementation, field assessment, stakeholder engagement and evidence - based development.His experience as State Lead Assessor on the World Bank - supported Agro - Climatic Resilience in Semi - Arid Landscapes(ACReSAL) project in Niger State, as well as his role as State Lead on the NEWMAP intervention in Edo State, has strengthened his capacity to lead multidisciplinary field activities, coordinate assessment processes, engage stakeholders and evaluate development interventions against intended outcomes.

As a Community Engagement Officer with Maxbreth Initiative, he was involved in community mobilization, stakeholder engagement, participatory development activities, and initiatives designed to strengthen community involvement in development processes.His experience in this area has deepened his understanding of the relationship between institutions, communities, stakeholders, and development outcomes.

As a Community Advocacy Officer with Impact Initiative, Dr.Ikaka further developed expertise in advocacy, community sensitization, stakeholder communication, mobilization, and development - oriented engagement.These experiences have strengthened his ability to work with diverse stakeholders, understand community needs, facilitate participation, and support interventions aimed at improving social and institutional outcomes.

His professional exposure also includes experience in human resource management and organizational administration, particularly through his role as Human Resource Intern at Ghetekor Construction Ltd.This experience provided practical exposure to human resource processes, employee relations, administrative coordination, organizational support, and workplace management.It complements his academic background in public administration and strengthens his understanding of how effective people management contributes to organizational performance.

  Dr.Ikaka has also served as Principal Research Officer at Beckonson - Research Gate, where he has contributed to research leadership, research design, data - driven inquiry, analytical processes, report development, and the generation of evidence for decision - making.His research experience spans public administration, governance, human resource development, organizational effectiveness, community development, public sector performance, food security, agricultural development, digital administrative systems, revenue generation, and sustainable development.

His research and professional interests are particularly concentrated around public policy analysis, strategic decision - making, institutional performance, human resource development, governance, community development, organizational effectiveness, and sustainable development.He is interested in understanding how public institutions and development organizations can improve their policies, systems, people, and decision - making processes to achieve measurable and sustainable outcomes.

A defining feature of Dr.Ikaka's professional profile is his ability to connect policy, research, management, and community realities. Rather than viewing public administration solely from a theoretical perspective, he approaches it as a practical discipline concerned with how institutions formulate policies, mobilize resources, manage people, engage stakeholders, implement programmes, and ultimately deliver value to citizens and communities. This perspective informs his work in teaching, research, policy analysis, community development, and institutional engagement.

Dr.Ikaka research portfolio reflects broad scholarly and professional interests, with research articles published in reputable peer - reviewed journals covering community self - help programmes and rural infrastructural development, work environment and human capital flight among service practitioners in peripheral formations, digital workflow systems and administrative efficiency, local government revenue generation, human resource development and internal security: linking recruitment to ethical behaviour in the Nigeria Police Force, food security and micro - farming strategies in Cross River State, sustainable development, and public - sector management.These areas demonstrate his capacity to address contemporary public - sector and development challenges through systematic research, empirical analysis, and evidence - based inquiry.

  Dr.Ikaka also possesses strong knowledge of policy analysis and strategic decision - making, with an appreciation of how evidence, institutional capacity, stakeholder interests, resource constraints, and implementation realities influence policy outcomes.His approach emphasizes the movement from evidence to policy, and from policy to measurable action, making his expertise relevant to government institutions, academic organizations, development agencies, non - governmental organizations, and other institutions seeking to improve performance and achieve sustainable results.

His professional trajectory reflects an individual who is not only committed to academic excellence but also to practical problem - solving, institutional strengthening, evidence - based decision - making, stakeholder engagement, and sustainable community development.He continues to build a career at the intersection of scholarship and practice, with the capacity to contribute meaningfully to universities, government institutions, development organizations, research institutions, NGOs, consulting assignments, and other organizations seeking informed, analytical, and development - oriented professionals.`,
    highlights: [
      "Lecturer at the University of Cross River State",
      "Expert in public policy analysis and strategic decision-making",
      "Author of published works on African climate economic policy",
    ],
  },
  {
    id: "james-lazarus",
    name: "James Akoh Lazarus",
    role: "Information and Communication Specialist",
    image: "/assets/leader7.png",
    bio: `James Akoh Lazarus is an Information and Communication Specialist with professional experience in research, data analysis, stakeholder engagement, reporting, and development programme coordination. His work combines strong analytical and communication capabilities to facilitate effective information management, evidence-based decision-making, and clear communication across diverse stakeholders.

At Zabet Trusthands, he works across consulting and development assignments, with experience spanning ACReSAL - related programmes and the development of an Integrated Landscape Management(ILM) Policy.His professional engagements include coordinating stakeholder interactions, conducting and analysing field data, preparing technical and analytical reports, and communicating project information to government institutions, development partners, communities, and other stakeholders.

He has also undertaken research, programme evaluations, and feasibility studies across diverse sectors, producing analytical reports and data - driven recommendations.His experience in data analysis, research, documentation, and stakeholder communication enables him to translate complex information into clear, practical insights that support effective programme implementation and sustainable development outcomes.

James holds a B.Sc.in Geography from Benue State University, Makurdi, and a Google Data Analytics Professional Certificate.`,
    highlights: [
      "Information and Communication Specialist with professional experience in research, data analysis, stakeholder engagement, reporting, and development programme coordination.",
      "B.Sc.in Geography from Benue State University, Makurdi",
    ],
  },
  {
    id: "sixtus-lebo",
    name: "Dr. Sixtus Emori Lebo",
    role: "Director of Energy Transition & Infrastructure",
    image: "/assets/leader8.png",
    bio: `Dr. Sixtus Emori Lebo is a Nigerian geoscientist and sustainable development consultant with over fifteen years of experience in petroleum geoscience, mineral exploration, and geophysical fieldwork, mainly across the Niger Delta and Calabar Flank of Nigeria. He works at the intersection of subsurface science and development consultancy, using geophysical data to inform decisions on mineral-resource governance, climate resilience, and sustainable land management.
He holds a Ph.D.in Mineral Exploration(Geophysics Option), an M.Sc.in Petroleum Geophysics, a Postgraduate Diploma in Basin Analysis, and a B.Sc.in Geology, all from the University of Calabar.His Ph.D.research used geophysical methods to estimate kaolin, barite, and iron ore reserves in parts of Cross River State.His broader research covers aeromagnetic and potential - field geophysics, hydrocarbon migration pathways controlled by geological structure, sedimentary basin modelling, and solid - mineral reserve estimation.He also works in coastal and marine geoscience, catchment planning, sustainable development analysis, and environmental resource management.
As Chief Scientific Officer at the Cross River State Ministry of Mineral Resources, Dr.Lebo reviews and certifies field data submitted for official Ministry reports, trains Ministry staff on quarrying and mining procedures, and checks the accuracy of technical reports submitted by quarry and mine operators in the state.He is also Principal Consultant to the Cross River Economic Intelligence Team(CREIT), a state government technical team.In this role, he leads the geoscientific case supporting Cross River State's claim to littoral (coastal) status and its associated share of oil wells, and prepares the aeromagnetic and geophysical evidence used in the state's briefs to federal government and other stakeholders.
    Dr.Lebo has held two major consulting roles for the World Bank and the Federal Government of Nigeria.First, as Lead Consultant, he carried out the Success Assessment of the Nigeria Erosion and Watershed Management Project(NEWMAP) in Ondo State.Second, he contributed to the mid - term evaluation of the Agro - Climatic Resilience in Semi - Arid Landscapes(ACReSAL) Project in Niger, Plateau, and Gombe States, working alongside Dr.David Ehizuelen Okoruwa, who served as the project's Mid-Term Review Consultant. ACReSAL is a Federal Government climate resilience and sustainable landscape management programme.
  Earlier in his career, as Principal Geologist at the National Center for Marine Geosciences(Nigerian Geological Survey Agency), Dr.Lebo led several coastal survey projects: geochemical and sediment - mineral mapping across Rivers, Akwa Ibom, Cross River, Bayelsa, Delta, Ondo, and Lagos States; the Coastal Erosion Survey of Akwa Ibom State; coastal groundwater mapping across six states; and the Tidal Channel Sedimentation Survey of Southeastern Nigeria, covering the Calabar River, Qua Iboe River, and the Douglas and Itak Abasi Creeks.
Across these roles, Dr.Lebo has built experience in geological and geophysical field surveys, mineral reserve estimation, catchment planning, environmental resource management, and Measurement, Reporting and Verification(MRV) frameworks —the systems used to track and confirm the results of development and climate projects.
He has authored several peer - reviewed publications on aeromagnetic and geophysical modelling, including studies on sediment thickness and basin depth in the Ikom Basin, magnetic basement modelling and hydrocarbon habitats in the Central Niger Delta, the use of aeromagnetics to identify basin depth before seismic exploration, and aeromagnetic evidence of oil seepages along the Lower Benue Trough.These appear in journals including the Global Journal of Pure and Applied Sciences and the Journal of Geography, Environment and Earth Science International.
Alongside his technical work, Dr.Lebo has held two leadership positions at the University of Calabar: Post - Graduate Class Representative in the Department of Geology, and Senator representing the Faculty of Sciences in the University's Postgraduate Student Government.
In summary, Dr.Sixtus Emori Lebo combines doctoral - level geophysical research, government technical leadership, field - survey experience, and consulting work in mineral exploration and sustainable development.This combination positions him to support evidence - based decision - making on mineral resources, climate resilience, and environmental governance in Cross River State and the wider Niger Delta region.`,
    highlights: [
      "Ph.D. in Mineral Exploration (Geophysics Option), University of Calabar",
      "M.Sc. Petroleum Geophysics, University of Calabar",
      "Chief Scientific Officer at the Cross River State Ministry of Mineral Resources",
      "Principal Consultant to the Cross River Economic Intelligence Team (CREIT)",
      "Lead Consultant, Cross River State Littoral Status Case, World Bank",
      "Consultant, Success Assessment of NEWMAP in Ondo State, World Bank",
      "Mid-term Evaluation Consultant, ACReSAL Project, Niger, Plateau, and Gombe States, World Bank",
      "Principal Geologist, National Center for Marine Geosciences (Nigerian Geological Survey Agency)",
      "Experience in mineral resource governance, environmental resource management, and Measurement, Reporting and Verification (MRV) frameworks",
    ],
  },
  {
    id: "patrick-mbang",
    name: "Mr. Usang, Patrick Mbang",
    role: "Researcher",
    image: "/assets/leader9.png",
    bio: `Mr. Usang, Patrick Mbang is an academic and researcher who holds a Diploma in Public Administration, a B.Sc. in Economics, an M.Sc. in Public Sector Economics, and is currently a Ph.D. candidate at the University of Port Harcourt, Port Harcourt Nigeria. 

He serves as a Lecturer in the Department of Economics, University of Calabar, Nigeria, with teaching experience in Economic theories, Development Studies, Research, and Applied Econometrics. 

He is proficient in the use of SPSS, EViews, Stata, and Excel, with a certificate in Dashboard Data Simulations using Tableau software, sponsored by Deloitte.

    In March 2026, he served as a consultant for the World Bank and Federal Government of Nigeria’s Agro Climatic Resilience in Semi Arid Landscapes(ACReSAL) Project under Zabet Trusthands, working alongside a team of professionals to conduct a Midterm Review of the ACRESAL projects across Northern Nigeria Plus the FCT.

      In 2022, he served as a State Lead / Data Analysts for Zabet Trusthands to monitor, evaluate and report the progress of the Nigerian Erosion and Watershed Management Project(NEWMAP) across Nigeria.

In May 2022, he Volunteered in the African Agender 2063 Program, a Youth Front for Sustainable Development(YFSD).

He has authored several publications that contribute to the field of economics.He is passionate about research, particularly field surveys and quantitative studies, offering innovative solutions to contemporary economic challenges.`,
    highlights: [
      "M.Sc. in Public Sector Economics, University of Calabar, Nigeria",
      "Ph.D. candidate at the University of Port Harcourt, Port Harcourt Nigeria",
      "Proficient in the use of SPSS, EViews, Stata, and Excel, with a certificate in Dashboard Data Simulations using Tableau software, sponsored by Deloitte",
      "Lecturer, Department of Economics, University of Calabar, Nigeria, with teaching experience in Economic theories, Development Studies, Research, and Applied Econometrics.",
      "Consultant for the World Bank and Federal Government of Nigeria’s Agro Climatic Resilience in Semi Arid Landscapes (ACReSAL) Project under Zabet Trusthands, working alongside a team of professionals to conduct a Midterm Review of the ACRESAL projects across Northern Nigeria Plus the FCT.",
    ],
  },
  {
    id: "emmanuel-olatunde",
    name: "Emmanuel Oluwaseyi Olatunde",
    role: "Finance Specialist, Zabet Trusthands",
    image: "/assets/leader10.png",
    bio: `Emmanuel Oluwaseyi Olatunde is a finance and accounting professional and a member of the Zabet Trusthands consulting team, with professional experience in accounting, financial management, financial analysis, public-sector finance, and development programmes. His experience combines practical knowledge of financial operations with exposure to government institutions, development projects, policy-related assignments, and multidisciplinary consulting engagements.
As a Finance Specialist with Zabet Trusthands, Emmanuel contributes to the financial and analytical dimensions of the firm’ consulting, research, policy advisory, project evaluation, and development - related assignments.His role involves supporting financial analysis, reviewing project and programme financial information, assessing resource utilisation, contributing to financial reporting and documentation, and providing financial insights that support evidence - based decision - making.
Emmanuel previously worked in the Accounting Department of the Ministry of Housing and Urban Development, where he gained practical experience in public - sector accounting and financial management.His responsibilities and exposure within the Ministry provided him with an understanding of government financial processes, financial documentation, accountability mechanisms, institutional controls, and the management and reporting of financial information within a public - sector environment.
He has also contributed to financial analysis for the Agro - Climatic Resilience in Semi - Arid Landscapes(ACReSAL) Project, a major World Bank - supported intervention of the Federal Government of Nigeria focused on climate resilience, sustainable landscape management, watershed management, natural resource management, and improved livelihoods.Through this engagement, he has gained valuable experience working with financial and programme information in the context of large - scale development interventions, including the assessment of financial performance, resource utilisation, and programme implementation.
Within the Zabet Trusthands team, Emmanuel works alongside professionals with expertise in environmental economics, Integrated Landscape Management, climate change, natural resource management, policy development, institutional strengthening, research, monitoring and evaluation, and sustainable development.His finance background provides an important financial perspective to the firm's multidisciplinary approach, particularly in assignments requiring financial analysis, budgeting, resource assessment, project evaluation, and the integration of financial considerations into development and policy interventions.
His core areas of professional competence include accounting, financial management, financial analysis, budgeting, financial reporting, public - sector finance, project finance, procurement, data analysis, and financial controls.He is particularly interested in applying financial and analytical tools to improve resource allocation, strengthen accountability, support project performance, and inform management and policy decisions.
Emmanuel is also developing expertise in data analytics and technology - enabled financial management, reflecting the increasing role of digital technologies and artificial intelligence in modern finance.He is interested in applying data - driven approaches to financial analysis, reporting, forecasting, performance assessment, and decision support.This combination of accounting knowledge and analytical capability enables him to contribute to assignments that require both financial interpretation and evidence - based analysis.
His professional development reflects a deliberate focus on expanding his capabilities across financial management, accounting, procurement, data analytics, and technology.He is progressing within the professional accounting pathway and continues to strengthen his technical competencies to meet the evolving demands of finance, consulting, and development practice.
As part of Zabet Trusthands' multidisciplinary consulting team, Emmanuel contributes to assignments that require the integration of financial, institutional, economic, and programme perspectives. He recognises that effective development interventions depend not only on sound technical design but also on appropriate financial planning, efficient resource utilisation, strong accountability systems, and measurable results.
He brings strong analytical, communication, teamwork, problem - solving, and organisational skills to his professional assignments.His ability to work with financial and non - financial information enables him to collaborate effectively with multidisciplinary teams and contribute to projects involving government institutions, development partners, consultants, and other stakeholders.
Through his role at Zabet Trusthands, Emmanuel is building a professional profile at the intersection of finance, development consulting, data analytics, procurement, and sustainable development.His experience in public - sector finance and development - project analysis, combined with his growing expertise in modern financial and analytical tools, positions him to contribute effectively to financial management, project evaluation, programme implementation, policy - related assignments, and broader development advisory services.
Emmanuel Oluwaseyi Olatunde is committed to using his financial and analytical expertise to support sound resource management, accountability, evidence-based decision - making, and improved development outcomes, while contributing to Zabet Trusthands' broader mission of delivering practical, evidence-based, and sustainable solutions to complex development challenges.`,
    highlights: [
      "Chartered Accountant with over 14 years of progressive experience in accounting and financial management",
      "Public-sector finance expertise gained from the Ministry of Housing and Urban Development",
      "Financial analysis for the World Bank-supported ACReSAL climate resilience project",
      "Multidisciplinary team member with expertise in finance, economics, and sustainable development",
      "Developing expertise in data analytics and technology-enabled financial management",
    ],
  },
  {
    id: "tavershima-ugoo",
    name: "Mr Tavershima Richard UGOO",
    role: "Agricultural and Social Science Specialist",
    image: "/assets/leader11.png",
    bio: `Mr. Tavershima Richard Ugoo is a Nigerian agro-specialist, agro-researcher, and sustainability specialist. He has eight years of professional experience in agronomy, horticulture, postharvest physiology and management, climate-smart agriculture, livelihood assessment and governance and development.
He holds a master's degree in Horticulture, specializing in Postharvest Physiology and Crop Management, and a bachelor's degree in Crop/Soil Science. He also completed a research fellowship at the University of Zimbabwe through GENES II (Intra-Africa Mobility for Plant Genomics Scholars to Accelerate Climate-Smart Adaptation Options and Food Security in Africa II), a program co-funded by the European Union. His research has focused on managing cropping systems agroecologically so they can withstand combined climatic, nutritional, and biotic stress.
As Agricultural and Social Science Specialist at Zabet Trusthands, Mr. Ugoo strengthens strategic engagement in research, technical assistance, capacity development, training, and program monitoring and evaluation. He combines agro-innovation and management, agronomic skills, cropping systems, climate-smart practices and adaptation, socioeconomic analysis, and institutional engagement and reform to solve complex agricultural and development challenges.
Over the past eight years, Mr. Ugoo has worked with team members to provide consultancy and technical advisory services to international development institutions, including the World Bank, federal and state government institutions, and private sector organizations. His experience spans policy formulation, project design and evaluation, climate and institutional governance, sustainable agricultural management, and project implementation.
Most recently, he contributed his expertise to the Mid-term Review of the Agro-Climatic Resilience in the Semi-Arid Landscapes (ACReSAL) project, a joint initiative of the World Bank and the Federal Government of Nigeria. ACReSAL is one of Nigeria's major climate resilience and sustainable landscape management interventions, covering the 19 northern states. This work builds on his extensive engagement with the Nigeria Erosion and Watershed Management Project (NEWMAP), where he gained experience in watershed management, erosion control, climate resilience and adaptation, ecosystem restoration, livelihood improvement, and community-based resource management.
Mr. Tavershima Richard Ugoo brings together academic scholarship, international collaborations and networks, policy experience, consulting expertise, and a practical understanding of Nigeria's agroecosystems and development landscape. His support to strategic and technical leadership reflects Zabet Trusthands' commitment to delivering credible, innovative, and sustainable agricultural and development solutions.`,
    highlights: [
      "Agro-specialist and sustainability specialist with eight years of professional experience in agronomy, horticulture, postharvest physiology and management, climate-smart agriculture, livelihood assessment and governance and development",
      "Research fellowship at the University of Zimbabwe through GENES II (Intra-Africa Mobility for Plant Genomics Scholars to Accelerate Climate-Smart Adaptation Options and Food Security in Africa II), a program co-funded by the European Union",
    ],
  },
];

export default function LeadershipSection() {
  const [selectedLeader, setSelectedLeader] = useState(null);

  // Close modal on Escape key press and manage body scroll
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedLeader(null);
      }
    };

    if (selectedLeader) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedLeader]);

  return (
    <section className="py-stack-xl px-4 sm:px-6 md:px-margin-desktop bg-background overflow-hidden">
      <div className="max-w-container-max mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-stack-lg md:mb-stack-xl gap-4">
          <ScrollReveal>
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-stack-sm block">
              THE MINDS BEHIND ZTKL
            </span>
            <h2 className="font-headline-xl text-headline-lg md:text-headline-xl text-primary font-bold">
              Executive Leadership
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="font-body-md text-sm md:text-base text-on-surface-variant max-w-md">
              A multidisciplinary leadership team driving sustainable innovation, policy excellence, and resilient enterprise transformation.
            </p>
          </ScrollReveal>
        </div>

        {/* Compact, High-Density Leadership Grid (10 Leaders) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {LEADERS.map((leader, index) => (
            <ScrollReveal key={leader.id} delay={(index % 5) * 0.08} className="group flex flex-col">
              <div
                className="aspect-[4/5] rounded-2xl overflow-hidden mb-3 relative cursor-pointer border border-outline-variant/30 bg-surface-container-low shadow-sm hover:shadow-lg hover:border-primary/40 transition-all duration-300"
                onClick={() => setSelectedLeader(leader)}
              >
                <Image
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  alt={`${leader.name} portrait`}
                  src={leader.image}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                />

                {/* Subtle Hover Action Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedLeader(leader);
                    }}
                    className="w-full bg-white/95 text-primary text-[11px] font-bold py-2 px-3 rounded-lg flex justify-between items-center shadow-md active:scale-95 transition-transform"
                    aria-label={`View bio of ${leader.name}`}
                  >
                    <span>VIEW BIO</span>
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </button>
                </div>
              </div>

              {/* Leader Meta Text */}
              <div className="flex flex-col flex-grow">
                <h5
                  onClick={() => setSelectedLeader(leader)}
                  className="font-headline-md text-sm md:text-base text-primary font-bold leading-snug group-hover:text-primary-container cursor-pointer transition-colors line-clamp-1"
                  title={leader.name}
                >
                  {leader.name}
                </h5>
                <p
                  className="font-label-sm text-[11px] md:text-xs text-secondary mt-0.5 line-clamp-2 leading-tight"
                  title={leader.role}
                >
                  {leader.role}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Interactive Bio Modal */}
      {selectedLeader && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md transition-all animate-in fade-in duration-200"
          onClick={() => setSelectedLeader(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="leader-bio-title"
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-10 shadow-2xl relative max-h-[90vh] overflow-y-auto border border-outline-variant/30 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedLeader(null)}
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-surface-container-low hover:bg-primary hover:text-white flex items-center justify-center text-on-surface-variant transition-colors cursor-pointer"
              aria-label="Close bio modal"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>

            {/* Modal Header Profile */}
            <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start mb-6">
              <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden flex-shrink-0 shadow-lg border-2 border-primary/20">
                <Image
                  src={selectedLeader.image}
                  alt={selectedLeader.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center sm:text-left pt-1">
                <span className="font-label-sm text-secondary uppercase tracking-widest font-bold block mb-1">
                  Executive Profile
                </span>
                <h3 id="leader-bio-title" className="font-headline-lg text-2xl sm:text-headline-lg font-bold text-primary leading-tight">
                  {selectedLeader.name}
                </h3>
                <p className="font-label-md text-on-surface-variant font-medium mt-1">
                  {selectedLeader.role}
                </p>
              </div>
            </div>

            {/* Modal Content Body */}
            <div className="border-t border-outline-variant/20 pt-6">
              <h4 className="font-label-md uppercase tracking-wider text-primary font-bold mb-3">
                Biography
              </h4>
              <div className="font-body-md text-on-surface-variant leading-relaxed mb-6 whitespace-pre-line space-y-3">
                {selectedLeader.bio}
              </div>

              {selectedLeader.highlights && (
                <>
                  <h4 className="font-label-md uppercase tracking-wider text-primary font-bold mb-3">
                    Key Expertise &amp; Focus
                  </h4>
                  <ul className="space-y-2.5">
                    {selectedLeader.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 font-body-md text-on-surface-variant text-sm sm:text-base">
                        <span className="material-symbols-outlined text-primary text-[20px] mt-0.5 flex-shrink-0">
                          check_circle
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
