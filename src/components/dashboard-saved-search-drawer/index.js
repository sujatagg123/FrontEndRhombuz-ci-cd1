import React, { useState, useEffect, useCallback } from 'react';
import {
  BoldBoxwpr,
  Boldtxt,
  CheckBox,
  Contentwpr,
  Descwpr,
  Infotxt,
  Infowpr,
  Inputwpr,
  Labelbox,
  Labelwpr,
  MidBoxwpr,
  Midtxt,
  PercBoxwpr,
  PercInputwpr,
  SwitchBoxwpr,
  SwitchContainer,
  Switchwpr,
  TextAreaContainer,
  Titlewpr,
} from './index.sc';
import InfoIcon from '../../assets/icons/InfoIcon';
import Proptypes from 'prop-types';
import {
  ButtonBoxwpr,
  ButtonsContainer,
  FooterBoxwpr,
  LeftfootBoxwpr,
} from '../custom-drawer/index.sc';
import { theme } from '../../constants/theme';

const SwitchBox = ({
  headline = 'Alert Me for Changes in Volume',
  label1 = 'Search volume increases by',
  label2 = 'Search volume decreases by',
  description = 'Alerts are based on Search Volumes. You will receive alerts when the volume crosses 15% within the next 24 hours.',
  increase = 25,
  decrease = 25,
  setData,
}) => {
  const [checked, setChecked] = useState(false);
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      if (checked) setShow(true);
    }, 350);
    setShow(false);
  }, [checked]);
  const handleCheckBox = () => {
    setChecked(!checked);
  };
  const [per1, setPer1] = useState(increase);
  const [per2, setPer2] = useState(decrease);
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const setDataCallback = useCallback(
    (data) => {
      setData(data);
    },
    [setData]
  );

  useEffect(() => {
    setDataCallback({
      increase: per1,
      decrease: per2,
    });
  }, [per1, per2, setDataCallback]);
  return (
    <SwitchBoxwpr checked={checked}>
      <BoldBoxwpr>
        <Boldtxt>{headline}</Boldtxt>
        <Switchwpr type="checkbox" id="switch" onChange={handleCheckBox} />
      </BoldBoxwpr>
      {show && checked && (
        <>
          <MidBoxwpr>
            <CheckBox checked={check1} onChange={() => setCheck1(!check1)} />
            <Midtxt>{label1}</Midtxt>
            <PercBoxwpr>
              <PercInputwpr
                value={per1}
                onChange={(e) => setPer1(e.target.value)}
                type="number"
                disabled={!check1}
              />
              %
            </PercBoxwpr>
          </MidBoxwpr>
          <MidBoxwpr>
            <CheckBox checked={check2} onChange={() => setCheck2(!check2)} />
            <Midtxt>{label2}</Midtxt>
            <PercBoxwpr>
              <PercInputwpr
                value={per2}
                onChange={(e) => setPer2(e.target.value)}
                type="number"
                disabled={!check2}
              />
              %
            </PercBoxwpr>
          </MidBoxwpr>
          <Descwpr>{description}</Descwpr>
        </>
      )}
    </SwitchBoxwpr>
  );
};

SwitchBox.propTypes = {
  headline: Proptypes.string,
  label1: Proptypes.string,
  label2: Proptypes.string,
  description: Proptypes.string,
  increase: Proptypes.number,
  decrease: Proptypes.number,
  setData: Proptypes.func,
};

const DashSearchDrwr = ({ toggler, heading = 'Save Search' }) => {
  const handleToggle = () => {
    toggler(false);
  };

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [volumebox, setVolumebox] = useState();
  const [sentimentbox, setSentimentbox] = useState();
  const [data, setData] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    if (!data) {
      setData({
        volumebox,
        sentimentbox,
        title,
        description,
      });
    }
    console.log(volumebox, sentimentbox, title, description);
    toggler(false);
  };

  return (
    <Contentwpr onSubmit={submitHandler}>
      <Infowpr>
        <InfoIcon />
        <Infotxt>Save this search before creating dashboard</Infotxt>
      </Infowpr>
      <Titlewpr>{heading}</Titlewpr>
      <Labelbox>
        <span>Name the title</span>
        <Labelwpr htmlFor="title">
          <Inputwpr
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            id="title"
          />
        </Labelwpr>
      </Labelbox>
      <Labelbox>
        <span>Description</span>
        <TextAreaContainer
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Labelbox>
      <SwitchContainer>
        <SwitchBox setData={setVolumebox} />
        <SwitchBox
          setData={setSentimentbox}
          headline="Alert Me for Changes in Sentiment"
          label1="Net sentiment increases by"
          label2="Net sentiment decreases by"
          description="Alerts are based on Search Volumes. You will receive alerts when the volume crosses 15% within the next 24 hours."
        />
      </SwitchContainer>
      <FooterBoxwpr style={{ padding: 0 }}>
        <LeftfootBoxwpr></LeftfootBoxwpr>
        <ButtonsContainer>
          <ButtonBoxwpr
            onClick={handleToggle}
            background={theme.dark.secondaryBackground}
            fontColor={theme.dark.secondaryText}
          >
            CANCEL
          </ButtonBoxwpr>
          <ButtonBoxwpr
            background={theme.dark.primary}
            fontColor={theme.dark.text}
          >
            SAVE SEARCH
          </ButtonBoxwpr>
        </ButtonsContainer>
      </FooterBoxwpr>
    </Contentwpr>
  );
};

DashSearchDrwr.propTypes = {
  toggler: Proptypes.func.isRequired,
  heading: Proptypes.string,
};

// this is the formate how we have to use this component

// const Howtouse = () => {
// const [show, setShow] = useState(false);
// return (
//   <>
//     <button onClick={() => setShow(true)}>click</button>
//     <DashboardPopup
//       popContent={<DashSearchDrwr toggler={setShow} />}
//       padding="1.75rem"
//       open={show}
//       toggler={setShow}
//       borderRadius="1rem"
//     />
//   </>
// );
// };

export default DashSearchDrwr;
