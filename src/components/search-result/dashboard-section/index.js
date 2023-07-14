import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  // BackDrop,
  // DashboardInnerSection,
  DashboardSection,
  DropHeader,
  // FullSlot,
  // HalfSlot,
  Iconwpr,
  // SlotWrp,
  // UberTextTitle,
  // UberTilesWrp,
  // UserTilesMainWrp,
} from '../index.sc';
import OverviewDropdown from '../../overview-dropdown';
import IconPop from '../../icon-popup';
import DownloadIcon from '../../../assets/icons/DownloadIcon';
import { AdvanceDashboard, Widgets } from '../../../constants/overview';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useDashboardData } from '../../../hooks/useSearch';
import { useParams } from 'react-router';
import Spinner from '../../spinner';
import DashboardInnerContainer from './DashboardInnerContainer';

const downloadList = [
  {
    id: 0,
    label: 'PDF',
  },
  {
    id: 1,
    label: 'Excel',
  },
  {
    id: 2,
    label: 'CSV',
  },
];

const DashboardSectionComponent = ({
  activeScreen,
  loader,
  setArticleType,
}) => {
  const { searchId } = useParams();
  const [selected, setSelected] = useState(null);

  const {
    isLoading: dashboardDataLoading,
    // error: searchError,
    data: dashboardData,
    // isFetching,
  } = useDashboardData(searchId);

  const tileDetails = dashboardData?.data?.data?.summary || [];
  const dashboardDetails = dashboardData?.data?.data?.dashboardDetails || [];

  const createPdf = async () => {
    // eslint-disable-next-line new-cap
    const pdf = new jsPDF('portrait', 'pt', 'a4');
    const contentElement = document.querySelector('#download-content');
    const graphElements = contentElement.querySelectorAll('.graph-widget');

    const capturePromises = Array.from(graphElements).map(
      async (graphElement) => {
        contentElement.scrollTo(0, graphElement.offsetTop);
        const data = await html2canvas(graphElement);
        return data.toDataURL('image/png');
      }
    );

    const graphImages = await Promise.all(capturePromises);

    graphImages.forEach((img, index) => {
      const imgProperties = pdf.getImageProperties(img);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
      const x = (pdf.internal.pageSize.getWidth() - pdfWidth) / 2;
      const y = (pdf.internal.pageSize.getHeight() - pdfHeight) / 2;
      pdf.addImage(img, 'PNG', x, y, pdfWidth, pdfHeight);

      if (index < graphImages.length - 1) {
        pdf.addPage();
      }
    });

    // Save the PDF
    pdf.save('search_result.pdf');
  };

  const handleDownload = (id) => {
    const downloadOption = downloadList.find(
      (download) => download.id === id
    ).label;
    if (downloadOption.toLowerCase() === 'pdf') {
      createPdf();
    }
  };

  if (dashboardDataLoading) {
    return <Spinner />;
  }
  return (
    <DashboardSection
      activeScreen={activeScreen}
      className={activeScreen === 'dashboard' ? 'active' : ''}
    >
      <DropHeader>
        <OverviewDropdown
          Widgets={Widgets}
          AdvanceDashboard={AdvanceDashboard}
        />
        <IconPop handleClick={handleDownload} Items={downloadList}>
          <Iconwpr>
            <DownloadIcon />
          </Iconwpr>
        </IconPop>
      </DropHeader>
      <DashboardInnerContainer
        dashboardDetails={dashboardDetails}
        tileDetails={tileDetails}
        selected={selected}
        loader={loader}
        setSelected={setSelected}
        setArticleType={setArticleType}
      />
    </DashboardSection>
  );
};

export default DashboardSectionComponent;

DashboardSectionComponent.propTypes = {
  activeScreen: PropTypes.string,
  loader: PropTypes.bool,
  setArticleType: PropTypes.func,
};
