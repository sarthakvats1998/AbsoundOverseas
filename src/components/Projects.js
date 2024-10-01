import React, { useState } from 'react';
import '../styles/Projects.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';

function Projects(props) {
  const north = [
    { project: 'Maulana Azad Dental College', location: 'New Delhi, Delhi', client: 'PWD' },
    { project: 'Netaji Subhash Institute of Technology', location: 'Dwarka, Delhi', client: 'DTTDC' },
    { project: 'IIT', location: 'Kanpur, U.P.', client: 'CPWD' },
    { project: 'M P Hall at Ambedkar Hospital', location: 'Rohini, Delhi', client: 'PWD' },
    { project: 'Indira Gandhi Bhawan', location: 'DDU Marg , Delhi', client: 'AICC' },
    { project: 'Auditorium at NHPC H O Complex', location: 'Faridabad, Haryana', client: 'NHPC' },
    { project: 'Seminar & Lecture Halls, JNU', location: 'New Delhi, Delhi', client: 'RITES' },
    { project: 'Directorate of Revenue Intelligence', location: 'Vasant kunj, Delhi', client: 'CPWD' },
    { project: 'M P Hall at Foreign Service Institute', location: 'New Delhi, Delhi', client: 'CPWD' },
    { project: 'Guru Gobind Singh Hospital', location: 'New Delhi, Delhi', client: 'PWD' },
    { project: 'Traffic Engineering Centre (MSO Building)', location: 'New Delhi, Delhi ', client: 'PWD' },
    { project: 'Auditorium at International Centre For Automotive Technology', location: 'Manesar, Haryana', client: 'Ministry Of Transport' },
    { project: 'Delhi Public Library', location: 'Ashok Vihar, Delhi', client: 'CPWD' },
    { project: 'Auditorium at Government Medical College', location: 'Haldwani, U.K.', client: 'UPRNN' },
    { project: 'Auditorium at Maharshi Balmiki Hospital', location: 'Punth Khurd , Delhi', client: 'PWD' },
    { project: 'M P Hall at Govt. Senior Secondary School', location: 'Hastsal, Delhi', client: 'PWD' },
    { project: 'M P Hall & Conference Room at Office Complex, D.M.R.C.', location: 'New Delhi, Delhi', client: 'DMRC' },
    { project: 'Auditorium at Adhyatmik Sadhna Kendra', location: 'New Delhi, Delhi', client: 'Mandir Trust' },
    { project: 'Auditorium at Arya P.G. College', location: 'Panipat, Haryana', client: 'Private' },
    { project: 'Punjab & Sindh Bank', location: 'Rohini, Delhi ', client: 'DTTDC' },
    { project: '3 Screens Multiplex At Parker Mall', location: ' Sonepat, Haryana', client: 'Private' },
    { project: 'Auditorium at I.R.D.T.', location: 'Dehradun, U.K.', client: 'U.K. Peyjal Nigam' },
    { project: 'Auditorium at Uttarakhand Technical University', location: 'Dehradun, U.K.', client: 'UPRNN' },
    { project: 'Auditorium at Panchayat Bhawan', location: 'Moradabad, U.P.', client: 'Rural Eng. Servises, U.P.' },
    { project: 'Auditorium at Kamal Public School', location: 'New Delhi, Delhi', client: 'Private' },
    { project: 'Auditorium at Pranvir Institute Of Technology', location: 'Kanpur, U.P.', client: 'Private' },
    { project: 'Auditorium at Aligarh Muslim University', location: 'Aligarh, U.P.', client: 'AMU' },
    { project: 'Jammu Convention Centre', location: 'Jammu, J&K', client: 'Hospitality & Protocol Department, J & K' },
    { project: 'Satluj Jal Vidyut Nigam', location: 'Shimla, H.P', client: 'NBCC' },
    { project: 'Aacharya Bhikshu Hospital', location: 'Moti Nagar, Delhi', client: 'PWD' },
    { project: 'Music Hall at British School', location: 'New Delhi, Delhi', client: 'Private' },
    { project: 'Sarvoday Kanya Vidyalya', location: 'Jahangirpuri, Delhi', client: 'DTTDC' },
    { project: 'Shyam Lal College, Delhi University', location: 'Shahdara, Delhi', client: 'Delhi University' },
    { project: 'Sarvoday Kanya Vidyalya', location: 'Sagarpur (Janakpuri), Delhi', client: 'DTTDC' },
    { project: 'Bal Bharti School', location: 'Dwarka, Delhi', client: 'Bal Bharti Development Fund' },
    { project: 'NCC Bhawan', location: 'Rohini, Delhi', client: 'PWD' },
    { project: 'Sarvodaya Kanya Vidyalya', location: 'Nanakpura (Moti Bagh), Delhi', client: 'DTTDC' },
    { project: 'Sarvodaya Kanya Vidyalya', location: 'Dakshinpuri, Delhi', client: 'DTTDC' },
    { project: 'Urban Training & Research Institute', location: 'Lucknow, U.P.', client: 'CPWD' },
    { project: 'Sarvoday Bal Vidyalya', location: 'Shalimar Bagh, Delhi', client: 'DTTDC' },
    { project: 'Dharohar Bhawan, Mandi House', location: 'New Delhi, Delhi', client: 'CPWD' },
    { project: 'Bal Bharti School', location: 'Noida, U.P.', client: 'Bal Bharti Development Fund' },
    { project: 'Sanjay Gandhi Hospital', location: 'Mangolpuri, Delhi', client: 'PWD' },
    { project: 'Sarvodaya Bal Kanya Vidyalaya', location: 'Sultanpuri, Delhi', client: 'PWD' },
    { project: 'Supreme Court Of India', location: 'New Delhi, Delhi', client: 'CPWD' },
    { project: 'Desu Colony School (DTL)', location: 'Janakpuri, Delhi', client: 'PWD' },
    { project: 'District Court', location: 'Rohini, Delhi', client: 'PWD' },
    { project: 'Ramjas college, Delhi University', location: 'Delhi University, Delhi', client: 'RITES' },
    { project: 'Guru Govind Singh I.P. University', location: 'New Delhi, Delhi', client: 'UWD' },
    { project: 'Auditorium at National Trust For Handicap', location: 'Kutub Institutional Area, Delhi', client: 'Jindal Group' },
    { project: 'Gurunanak Dev Institute', location: 'Rohini , Delhi', client: 'PWD' },
    { project: 'Seminar Hall & Library, Hansraj College', location: 'North Campus, Delhi University, Delhi', client: 'Delhi University' },
    { project: 'National Book Trust', location: 'Janakpuri, Delhi', client: 'DTTDC' },
    { project: 'DDU Hospital', location: 'Hari Nagar, Delhi', client: 'PWD' },
    { project: 'CBI Court', location: 'DDU Marg, ITO, Delhi', client: 'PWD' },
    { project: 'School of Excellence', location: 'Rohini, Delhi', client: 'PWD' },
    { project: 'Bhagat Phool Singh Mahila Vishwavidyalaya', location: 'Sonipat, Haryana', client: 'PHC, Haryana' },
    { project: 'CAPART', location: 'Janakpuri, Delhi', client: 'CPWD' },
    { project: 'IASRI', location: 'Pusa, Delhi', client: 'CPWD' },
    { project: 'MP Hall S K V 1', location: 'Tilak Nagar, Delhi', client: 'PWD' },
    { project: 'MP Hall Sarvoday Vidyalaya', location: 'Subhash Nagar, Delhi', client: 'PWD' },
    { project: 'MP Hall Sarvoday Co-ed Vidyalaya', location: 'Hari Nagar, Delhi', client: 'PWD' },
    { project: 'Integrated Inst. Of Technology', location: 'Dwarka, Delhi', client: 'DTTDC' },
    { project: 'M P Hall Govt. Sr. Secondary School', location: 'Mukherjee Nagar, Delhi', client: 'PWD' },
    { project: 'Indira Gandhi Tech. University For Woman', location: 'Kashmiri Gate, Delhi', client: 'PWD' },
    { project: 'District Court', location: 'Dwarka, Delhi', client: 'PWD' },
    { project: 'M P Hall Govt. Sr. Secondary School', location: 'Uttam Nagar, Delhi', client: 'PWD' },
    { project: 'Central Armed Police Forces Institute of Medical Science', location: 'Maidangarhi, New Delhi', client: 'CPWD' },
    { project: 'Hansraj College', location: 'North Campus, Delhi University, Delhi', client: 'Delhi University' },
    { project: 'Graphic Era University', location: 'Dehradun , U.K.', client: 'GEU' },
    { project: 'APCPL', location: 'Jharli , Haryana', client: 'NTPC' },
    { project: 'M P Hall Govt. Sr. Secondary School', location: 'Pitampura, Delhi', client: 'PWD' },
    { project: 'Satluj Jal Vidyut Nigam Head Quarter', location: 'Shimla, H.P.', client: 'SJVNL' },
    { project: 'Bal Bharti School', location: 'Ludhiana, Punjab', client: 'Private' },
  ];

  const south = [
    { project: 'NIT', location: 'Trichy, Tamil Nadu', client: 'CPWD' },
    { project: 'Jawaharlal Nehru Tech. University', location: 'Anantapur, Andhra Pradesh', client: 'HSCL' },
  ];

  const east = [
    { project: 'Convention Centre', location: 'Ranchi, Jharkhand', client: 'NBCC' },
    { project: 'Govt. Medical College', location: ' Koderma, Jharkhand', client: 'Govt. of Jharkhand' },
    { project: 'Govt. Medical College & Hospital', location: ' Dumka, Jharkhand', client: 'Govt. of Jharkhand' },
    { project: 'L.N. Misra Institute', location: 'Patna, Bihar', client: 'BSEIDC' },
    { project: 'Rajiv Gandhi National Stadium', location: 'Guwahati, Assam', client: 'GMDA' },
    { project: 'Agriculture University', location: 'Pusa Samastipur, Bihar', client: 'RPCAU Admin' },
    { project: 'Saheed Rendo Majhi Medical College & Hospital', location: 'Bhawanipatna, Odisha', client: 'PWD' },
    { project: 'Sadar Hospital', location: 'Ranchi , Jharkhand', client: 'HSCC' },
    { project: 'Kar Bhawan', location: 'Guwahati , Assam', client: 'FCT' },
    { project: 'STPI', location: 'Patna, Bihar', client: 'NPCC' },
    { project: 'Keonjhar Medical College', location: 'Keonjhar, Odisha', client: 'PWD' },
    { project: 'Govt. Medical College and Hospital', location: ' Koderma, Jharkhand', client: 'PWD' },
  ];

  const west = [
    { project: 'U N Mehta Institute of Cardiology & Research Centre', location: 'Ahmedabad, Gujarat', client: 'Hospital Admin' },
    { project: 'Prasar Bharti', location: 'Pune, Maharashtra', client: 'AIR' },
    { project: 'Mahatma Mandir, Convention and Exhibition Centre', location: 'Gandhinagar, Gujarat', client: 'Industrial Extension Bureau' },
    { project: 'Savitribai Phule Pune University', location: 'Pune, Maharashtra', client: 'Pune University' },
    { project: 'IIT', location: 'Gandhinagar, Gujarat', client: 'CPWD' },
    { project: 'SVNIT', location: 'Surat, Gujarat', client: 'CPWD' },
  ];

  const center = [
    { project: 'IIM', location: 'Raipur, Chhatisgarh', client: 'IMMR' },
    { project: 'IIT', location: ' Indore , M.P.', client: 'CPWD' },
    { project: 'Super Thermal Power Station', location: 'Gadarwara, M.P.', client: 'NTPC' },
  ];

  const renderTable = (data, currentPage, itemsPerPage) => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    return (
      <Table striped bordered hover size="md">
        <thead>
          <tr>
            <th>Project</th>
            <th>Location</th>
            <th>Client</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item, index) => (
            <tr key={index}>
              <td>{item.project}</td>
              <td>{item.location}</td>
              <td>{item.client}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  };

  const renderPagination = (dataLength, currentPage, setCurrentPage, itemsPerPage) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(dataLength / itemsPerPage); i++) {
      pageNumbers.push(i);
    }

    return (
      <Pagination>
        <Pagination.First onClick={() => setCurrentPage(1)} />
        <Pagination.Prev onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} />
        {pageNumbers.map(number => (
          <Pagination.Item
            key={number}
            active={number === currentPage}
            onClick={() => setCurrentPage(number)}
          >
            {number}
          </Pagination.Item>
        ))}
        <Pagination.Next onClick={() => setCurrentPage(prev => Math.min(prev + 1, pageNumbers.length))} />
        <Pagination.Last onClick={() => setCurrentPage(pageNumbers.length)} />
      </Pagination>
    );
  };

  const [currentPageNorth, setCurrentPageNorth] = useState(1);
  const [currentPageSouth, setCurrentPageSouth] = useState(1);
  const [currentPageEast, setCurrentPageEast] = useState(1);
  const [currentPageWest, setCurrentPageWest] = useState(1);
  const [currentPageCenter, setCurrentPageCenter] = useState(1);
  const itemsPerPage = 20;

  return (
    <div className='container' style={{marginTop: '150px', marginBottom: '150px'}}>
      <Tabs defaultActiveKey="north" id="justify-tab-example" className="mb-3" justify>
        <Tab eventKey="north" title="North India" className='tab' style={{color:'white'}}>
          {renderTable(north, currentPageNorth, itemsPerPage)}
          {renderPagination(north.length, currentPageNorth, setCurrentPageNorth, itemsPerPage)}
        </Tab>
        <Tab eventKey="east" title="East India">
          {renderTable(east, currentPageEast, itemsPerPage)}
          {renderPagination(east.length, currentPageEast, setCurrentPageEast, itemsPerPage)}
        </Tab>
        <Tab eventKey="south" title="South India">
          {renderTable(south, currentPageSouth, itemsPerPage)}
          {renderPagination(south.length, currentPageSouth, setCurrentPageSouth, itemsPerPage)}
        </Tab>
        <Tab eventKey="west" title="West India">
          {renderTable(west, currentPageWest, itemsPerPage)}
          {renderPagination(west.length, currentPageWest, setCurrentPageWest, itemsPerPage)}
        </Tab>
        <Tab eventKey="central" title="Central India">
          {renderTable(center, currentPageCenter, itemsPerPage)}
          {renderPagination(center.length, currentPageCenter, setCurrentPageCenter, itemsPerPage)}
        </Tab>
      </Tabs>
    </div>
  );
}

export default Projects;
