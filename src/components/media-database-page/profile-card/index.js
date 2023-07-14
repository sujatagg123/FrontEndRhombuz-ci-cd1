import React, { useEffect, useState } from 'react';
import Proptypes from 'prop-types';
import {
  CardBottom,
  CardMiddle,
  CardTop,
  CardTopWrp,
  CheckBox,
  DescrWrp,
  ExtraTagText,
  MainWrp,
  ProfileImage,
  ProfileName,
  ScoreText,
  ScoreWrp,
  SubText,
  TagContainer,
  TagLengthContainer,
  TagText,
  TagsWrp,
  TopAuthorText,
  TopAuthorWrp,
  TopLeftWrp,
} from './index.sc';
import TopAuthorStar from '../../../assets/icons/TopAuthorStar';
import CheckCircle from '../../../assets/icons/CheckCircle';
import { useNavigate } from 'react-router-dom';

const ProfileCard = ({ profile }) => {
  const [tags, setTags] = useState([]);
  const [tagLength, setTagLength] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const requiredTags = profile.tags.slice(0, 4);
    setTags(requiredTags);
    setTagLength(profile.tags.length - requiredTags.length);
  }, [profile]);

  function handleClick() {
    navigate(`/media-database/${profile.id}`);
  }
  return (
    <MainWrp onClick={handleClick}>
      <CardTop>
        <CardTopWrp>
          <TopLeftWrp>
            <CheckBox />
            {profile.topAuthor && (
              <TopAuthorWrp>
                <TopAuthorStar />
                <TopAuthorText>Top Author</TopAuthorText>
              </TopAuthorWrp>
            )}
          </TopLeftWrp>
          <CheckCircle />
        </CardTopWrp>
        <ProfileImage image={profile.profilePicture} />
      </CardTop>
      <CardMiddle>
        <DescrWrp>
          <ProfileName>{profile.name}</ProfileName>
          <SubText>{profile.occupation}</SubText>
        </DescrWrp>
        <ScoreWrp>
          <ScoreText>{profile.journalistScore}</ScoreText>
          <SubText>Journalist Score</SubText>
        </ScoreWrp>
      </CardMiddle>
      <CardBottom>
        <TagsWrp>
          {tags.map((tag, i) => {
            return (
              <TagContainer id={i} key={i}>
                <TagText id={i}>{tag}</TagText>
              </TagContainer>
            );
          })}
          <TagLengthContainer>
            <ExtraTagText>+ {tagLength} More</ExtraTagText>
          </TagLengthContainer>
        </TagsWrp>
      </CardBottom>
    </MainWrp>
  );
};

ProfileCard.propTypes = {
  profile: Proptypes.object,
  setSelectedCard: Proptypes.func,
};

export default ProfileCard;
