import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  ExternalLink, 
  Briefcase, 
  GraduationCap, 
  Code, 
  Database, 
  Award,
  BarChart,
  User,
  Menu,
  X,
  Instagram
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle smooth scrolling
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Update active section based on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'education'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Education', id: 'education' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-200 selection:text-blue-900">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-slate-800 tracking-tight">Roy Rangga Rofiul Azmi</span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollTo(link.id)}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    activeSection === link.id ? 'text-blue-600 border-b-2 border-blue-600 pb-1' : 'text-slate-600'
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-600 hover:text-slate-900 focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollTo(link.id)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                    activeSection === link.id ? 'bg-blue-50 text-blue-600' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-600 mr-2 animate-pulse"></span>
              Available for new opportunities
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-4 tracking-tight">
              Hi, I'm <span className="text-blue-600">Roy Rangga</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-slate-600 mb-6">
              Data Analyst & Data Engineer
            </h2>
            <p className="text-lg text-slate-500 mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed">
              Transforming complex data into actionable business insights. Specialized in ETL pipelines, advanced analytics, and dynamic dashboard reporting.
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
              <a href="mailto:roy.rangga.rofiul@gmail.com" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm shadow-blue-200">
                <Mail className="w-5 h-5 mr-2" />
                Email Me
              </a>
              <a href="https://www.linkedin.com/in/roy-rangga-rofiul-azmi" target="_blank" rel="noreferrer" className="inline-flex items-center px-6 py-3 bg-white text-slate-700 font-medium rounded-lg border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm">
                <Linkedin className="w-5 h-5 mr-2 text-[#0A66C2]" />
                LinkedIn
              </a>
              <a href="https://github.com/RoyRangga" target="_blank" rel="noreferrer" className="inline-flex items-center px-6 py-3 bg-white text-slate-700 font-medium rounded-lg border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </a>
              <a href="https://www.instagram.com/royranggawfh?igsh=MThzZ3NkN2t0N2o0Yg==" target="_blank" rel="noreferrer" className="inline-flex items-center px-6 py-3 bg-white text-slate-700 font-medium rounded-lg border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm">
                <Instagram className="w-5 h-5 mr-2 text-[#E1306C]" />
                Instagram
              </a>
            </div>

            <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-slate-400" />
                Central Jakarta, DKI Jakarta
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-slate-400" />
                +62-81233652134
              </div>
            </div>
          </div>
          
          <div className="flex-shrink-0 relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-white shadow-xl overflow-hidden bg-slate-200 relative z-10">
              <img 
                src="\Image_Profile2.PNG" 
                alt="Roy Rangga Rofiul Azmi" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            {/* Decorative background circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-blue-100 rounded-full z-0 blur-3xl opacity-60"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white border-y border-slate-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8 justify-center md:justify-start">
            <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
              <User className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Professional Summary</h2>
          </div>
          <div className="prose prose-lg text-slate-600 leading-relaxed max-w-none">
            <p>
              Professional with 2 years of experience spanning data engineering and application support environments. I take responsibility for data analysis, data cleaning, ETL pipeline development, database management, and dashboard reporting to actively support business insights and decision-making processes.
            </p>
            <p>
              Highly skilled in a modern data stack including Python, SQL, and Business Intelligence tools such as Power BI, Tableau, and Metabase. I hold a Bachelor's degree in Agricultural Technology from Brawijaya University, which is complemented by numerous specialized certifications in data science, machine learning, and comprehensive data analytics tools.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-slate-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-12 justify-center md:justify-start">
            <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
              <Briefcase className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Work Experience</h2>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
            
            {/* Experience 1 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-blue-500 text-slate-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 absolute left-0 md:left-1/2 z-10">
                <Database className="w-4 h-4" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] ml-16 md:ml-0 p-6 rounded-2xl bg-white shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                  <h3 className="font-bold text-lg text-slate-900">Application Support</h3>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    Jan 2025 - Jan 2026
                  </span>
                </div>
                <div className="text-slate-600 font-medium text-sm mb-4">Central Bank of Indonesia</div>
                <ul className="list-disc list-outside ml-4 text-slate-600 space-y-2 text-sm">
                  <li>Conducted deep-dive Root Cause Analysis (RCA) and collaborated with engineering teams to resolve complex application and data flow bottlenecks.</li>
                  <li>Managed production database integrity and application stability by investigating bug reports and executing SQL-based fixes.</li>
                  <li>Proactively monitored system health and implemented alerting mechanisms to ensure high availability of data-driven applications.</li>
                  <li>Orchestrated deployment and release support, including rigorous validation and smoke testing.</li>
                  <li>Analyzed application performance data and effectively presented insights to stakeholders to ensure continuous improvement.</li>
                </ul>
              </div>
            </div>

            {/* Experience 2 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-400 text-slate-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 absolute left-0 md:left-1/2 z-10">
                <Code className="w-4 h-4" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] ml-16 md:ml-0 p-6 rounded-2xl bg-white shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                  <h3 className="font-bold text-lg text-slate-900">Data Engineer</h3>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800">
                    Dec 2023 - Nov 2024
                  </span>
                </div>
                <div className="text-slate-600 font-medium text-sm mb-4">Avrist Assurance</div>
                <ul className="list-disc list-outside ml-4 text-slate-600 space-y-2 text-sm">
                  <li>Built interactive data visualizations and dashboards using Power BI, Tableau, and Metabase to generate business insights.</li>
                  <li>Developed Python-based ETL pipelines and maintained, optimized, and enhanced existing ETL processes.</li>
                  <li>Performed data cleansing and preprocessing using Python to ensure data accuracy and consistency.</li>
                  <li>Created and maintained SQL Server stored procedures for data transformation and reporting.</li>
                  <li>Executed ETL data reconciliation using Python to validate data completeness and integrity.</li>
                </ul>
              </div>
            </div>

            {/* Experience 3 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-400 text-slate-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 absolute left-0 md:left-1/2 z-10">
                <BarChart className="w-4 h-4" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] ml-16 md:ml-0 p-6 rounded-2xl bg-white shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                  <h3 className="font-bold text-lg text-slate-900">Data Analyst</h3>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800">
                    Jun 2023 - Aug 2023
                  </span>
                </div>
                <div className="text-slate-600 font-medium text-sm mb-4">Halleon</div>
                <ul className="list-disc list-outside ml-4 text-slate-600 space-y-2 text-sm">
                  <li>Processed and analyzed complex data sources using advanced Microsoft Excel, including Power Pivot and Macro (VBA).</li>
                  <li>Developed interactive Power BI dashboards to monitor EHS inspection activities.</li>
                  <li>Collaborated with Power Apps developers to establish a reliable data environment integrating Power Apps, SharePoint Lists, and Power BI.</li>
                  <li>Managed and migrated data from Excel files to SharePoint Lists to improve data accessibility.</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white border-y border-slate-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12 justify-center md:justify-start">
            <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
              <Code className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Featured Projects</h2>
          </div>

          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-2/3">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">End-to-End Data Engineering: Job Market Analyzer</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['Python', 'Selenium', 'Apache Airflow', 'PySpark', 'dbt', 'PostgreSQL', 'Docker', 'Power BI'].map(tech => (
                    <span key={tech} className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-600 shadow-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Architected and deployed an automated, end-to-end data pipeline to extract, process, and analyze job market data, demonstrating strong problem-solving and full-stack data engineering skills.
                </p>
                <ul className="space-y-3 text-slate-600 mb-8">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">▹</span>
                    <span>Engineered a web scraping mechanism using Selenium to reliably ingest external data sources.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">▹</span>
                    <span>Orchestrated complex data workflows utilizing Apache Airflow to ensure seamless and scheduled data ingestion.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">▹</span>
                    <span>Executed large-scale data processing using PySpark and implemented data transformation models utilizing dbt for analytical readiness.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">▹</span>
                    <span>Configured and managed relational database storage solutions combining PostgreSQL and SQL Server, fully containerized within Docker.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">▹</span>
                    <span>Developed interactive Power BI dashboards to visualize job market trends, salary distributions, and skill demands.</span>
                  </li>
                </ul>
              </div>
              
              <div className="lg:w-1/3 flex flex-col justify-center space-y-4">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                  <h4 className="font-semibold text-slate-900 mb-4 flex items-center">
                    <ExternalLink className="w-4 h-4 mr-2 text-blue-600" />
                    Project Links
                  </h4>
                  <div className="space-y-3">
                    <a href="https://github.com/RoyRangga" target="_blank" rel="noreferrer" className="flex items-center text-sm text-slate-600 hover:text-blue-600 transition-colors p-2 hover:bg-slate-50 rounded-lg">
                      <Github className="w-4 h-4 mr-3" />
                      View on GitHub
                    </a>
                    <a href="https://app.powerbi.com/view?r=eyJrIjoiNTc1MTM0MWItZDdhYi00YzFjLTlmNjktOTJkMzU5ODYyNTQ4IiwidCI6IjVhNzQ5MDBhLTY2MTItNDNmNS1hYWRhLWNmZDA2NmFlMTVhMSIsImMiOjN9&pageName=631299695139e759062e" target="_blank" rel="noreferrer" className="flex items-center text-sm text-slate-600 hover:text-blue-600 transition-colors p-2 hover:bg-slate-50 rounded-lg">
                      <BarChart className="w-4 h-4 mr-3" />
                      Power BI Visualization
                    </a>
                    <a href="https://public.tableau.com/views/JobMarketAnalyzer/DataJobMapping?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link" target="_blank" rel="noreferrer" className="flex items-center text-sm text-slate-600 hover:text-blue-600 transition-colors p-2 hover:bg-slate-50 rounded-lg">
                      <BarChart className="w-4 h-4 mr-3" />
                      Tableau Visualization
                    </a>
                    <a href="https://l1nk.dev/u6ughgr" target="_blank" rel="noreferrer" className="flex items-center text-sm text-slate-600 hover:text-blue-600 transition-colors p-2 hover:bg-slate-50 rounded-lg">
                      <Linkedin className="w-4 h-4 mr-3 text-[#0A66C2]" />
                      LinkedIn Post
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12 justify-center md:justify-start">
            <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
              <Database className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Technical Skills</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Programming & Frameworks */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-lg font-bold text-slate-800 mb-4 border-b border-slate-100 pb-2">Programming & Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'SQL', 'C#', '.NET', 'JavaScript', 'HTML/CSS', 'R', 'Flask', 'Streamlit'].map(skill => (
                  <span key={skill} className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-700 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Data Engineering & Cloud */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-lg font-bold text-slate-800 mb-4 border-b border-slate-100 pb-2">Data Engineering & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {['PySpark', 'Apache Airflow', 'Kafka', 'dbt', 'SSIS', 'Docker', 'MinIO', 'Selenium', 'ETL Pipeline Dev', 'Data Modeling', 'Data Warehousing'].map(skill => (
                  <span key={skill} className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-700 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* DB, BI & Analytics */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-lg font-bold text-slate-800 mb-4 border-b border-slate-100 pb-2">Databases, BI & Analytics</h3>
              <div className="flex flex-wrap gap-2">
                {['SQL Server', 'PostgreSQL', 'MySQL', 'MongoDB', 'Power BI', 'Tableau', 'Metabase', 'Grafana', 'Pandas', 'NumPy', 'Scikit Learn', 'TensorFlow', 'Advanced Excel'].map(skill => (
                  <span key={skill} className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-700 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Soft Skills & Languages */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center">
                <span className="w-1.5 h-6 bg-blue-500 rounded-full mr-3"></span>
                Soft Skills
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Analytical Thinking, Critical Thinking, Problem Solving, Attention To Detail, Decision Making, Communication & Presentation Skills, Strategic Thinking, Adaptability, Time Management, Continuous Learning.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center">
                <span className="w-1.5 h-6 bg-blue-500 rounded-full mr-3"></span>
                Languages
              </h3>
              <div className="flex flex-col space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-slate-700 font-medium">Bahasa Indonesia</span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-full">Native</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-700 font-medium">English</span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-full">Fluent</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Certs */}
      <section id="education" className="py-20 bg-white border-t border-slate-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Education</h2>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-slate-800">Brawijaya University</h3>
                <span className="text-sm font-medium text-slate-500">2017 - 2022</span>
              </div>
              <p className="text-blue-600 font-medium mb-3">Bachelor of Agricultural Technology</p>
              <div className="inline-flex items-center px-3 py-1 bg-white border border-slate-200 rounded-full text-sm font-bold text-slate-700 shadow-sm">
                GPA: 3.24 / 4.00
              </div>
            </div>

            {/* Organizations */}
            <div className="mt-8">
              <h3 className="text-lg font-bold text-slate-800 mb-4 border-b border-slate-100 pb-2">Organizations</h3>
              <ul className="space-y-4">
                <li className="flex justify-between items-start border-l-2 border-slate-200 pl-4">
                  <div>
                    <p className="font-medium text-slate-800 text-sm">Muslim Calisthenic Jakarta</p>
                    <p className="text-slate-500 text-xs">Member</p>
                  </div>
                  <span className="text-xs text-slate-400 whitespace-nowrap">Mar 2023 - Present</span>
                </li>
                <li className="flex justify-between items-start border-l-2 border-slate-200 pl-4">
                  <div>
                    <p className="font-medium text-slate-800 text-sm">Forkita</p>
                    <p className="text-slate-500 text-xs">Mentoring Department Staff</p>
                  </div>
                  <span className="text-xs text-slate-400 whitespace-nowrap">Feb 2018 - Dec 2020</span>
                </li>
                <li className="flex justify-between items-start border-l-2 border-slate-200 pl-4">
                  <div>
                    <p className="font-medium text-slate-800 text-sm">IPNU (Nahdlatul Ulama Student Association)</p>
                    <p className="text-slate-500 text-xs">Entrepreneurship Department Staff</p>
                  </div>
                  <span className="text-xs text-slate-400 whitespace-nowrap">Feb 2019 - Nov 2020</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                <Award className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Training & Certifications</h2>
            </div>
            
            <div className="space-y-4">
              {[
                { title: "Microsoft Cloud & Data: Microsoft MS-4019 & AB-731T00", issuer: "Microsoft", date: "March 2026" },
                { title: "Business Intelligence AI", issuer: "Metrodata Academy", date: "February 2026" },
                { title: "Google Cybersecurity", issuer: "KOMINFO x Google", date: "Sep 2024 - Nov 2024" },
                { title: "Machine Learning Foundation with AWS", issuer: "AWS Training", date: "Sep 2023 - Oct 2023" },
                { title: "Metrodata Coding Camp Java", issuer: "Metrodata Academy", date: "Apr 2023 - Jun 2023" },
                { title: "Data Science for Beginner", issuer: "Digitalent", date: "May 2022" },
              ].map((cert, index) => (
                <div key={index} className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-start gap-4 hover:shadow-sm transition-shadow">
                  <div className="p-2 bg-white rounded-lg shadow-sm shrink-0 border border-slate-100">
                    <Award className="w-5 h-5 text-blue-500" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-800 text-sm">{cert.title}</h4>
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-slate-500 text-xs">{cert.issuer}</span>
                      <span className="text-slate-400 text-xs bg-white px-2 py-0.5 rounded border border-slate-100">{cert.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 text-center border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-6">Roy Rangga Rofiul Azmi</h2>
          <div className="flex justify-center space-x-6 mb-8">
            <a href="mailto:roy.rangga.rofiul@gmail.com" className="hover:text-white transition-colors">
              <span className="sr-only">Email</span>
              <Mail className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/roy-rangga-rofiul-azmi" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://github.com/RoyRangga" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <span className="sr-only">GitHub</span>
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/royranggawfh?igsh=MThzZ3NkN2t0N2o0Yg==" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <span className="sr-only">Instagram</span>
              <Instagram className="w-6 h-6" />
            </a>
          </div>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Roy Rangga. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;