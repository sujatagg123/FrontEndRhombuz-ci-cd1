import React, { useRef } from 'react';
import {
  ButtonBoxwpr,
  ButtonWrp,
  ContentWrp,
  CrossButtonWrp,
  HeadingText,
  HeadingWrp,
  InputBox,
  InputBoxTitle,
  InputWrp,
  MainWrp,
} from './index.sc';
import PropTypes from 'prop-types';
import { theme } from '../../../../../../constants/theme';
import Close from '../../../../../../assets/icons/Close';

const ArticleData = {
  title:
    'Few Parents intend to have very Young Children Vaccinated Against Covid',
  content:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti magnam aspernatur perspiciatis, minus ex est quis. Consequatur dolor earum unde ex sit labore iste, praesentium mollitia. Ullam non possimus totam? Eum sapiente vel nisi minima itaque! Consequatur laborum odio fugiat nisi, quas at non impedit. Deleniti, fugiat ea, ex, sint omnis culpa alias esse quidem natus ducimus maiores. Ducimus, enim? Doloribus adipisci soluta earum labore ut quis aliquid quas eos esse. Minus quod quidem obcaecati, cum, tempora ad ex expedita quis in voluptatibus sit sequi deleniti? Consectetur qui veniam aperiam Omnis, culpa. Eum aperiam modi consequuntur? Quae nulla rerum sit commodi. Ad commodi doloremque suscipit praesentium, soluta ullam, consequatur tempore, ut animi natus officia dolore hic voluptate sit odio reiciendis',
  link: 'https://indianexpress.com/article/lifestyle/fashion/gucci-alia-bhatt-global-ambassador-8609049/',
  icon: 'https://yt3.ggpht.com/ytc/AGIKgqM0ymt1FyptuNbIiKEa2h446IAI-GaddiF4qqgMVg=s88-c-k-c0x00ffffff-no-rj',
  image:
    'https://www.si.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk4NTkxOTAxNzY1NDc3ODI3/m298864.jpg',
  matches: ['GUCCI', 'abc'],
  ave: '~$1.5 M',
  sentiment: 'positive',
};

const ArticleInputBox = ({ handleClose, onSubmit }) => {
  const linkRef = useRef(null);

  function handleUrlSubmit() {
    // const linkValue = linkRef.current.value;
    onSubmit(ArticleData);
  }

  return (
    <MainWrp>
      <InputWrp>
        <HeadingWrp>
          <HeadingText>Add Article</HeadingText>
          <CrossButtonWrp onClick={handleClose}>
            <Close color={theme.dark.primary} />
          </CrossButtonWrp>
        </HeadingWrp>
        <ContentWrp>
          <InputBoxTitle>URL Link</InputBoxTitle>
          <InputBox ref={linkRef} placeholder="Add url link here" />
        </ContentWrp>
        <ButtonWrp>
          <ButtonBoxwpr
            onClick={handleClose}
            fontColor={theme.dark.secondaryText}
            background={'#F6F7FB'}
          >
            CANCEL
          </ButtonBoxwpr>
          <ButtonBoxwpr
            fontColor={theme.dark.text}
            background={theme.dark.primary}
            onClick={handleUrlSubmit}
          >
            ADD
          </ButtonBoxwpr>
        </ButtonWrp>
      </InputWrp>
    </MainWrp>
  );
};

ArticleInputBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default ArticleInputBox;
