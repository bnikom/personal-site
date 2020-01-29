/* eslint react/jsx-filename-extension: 0 */
/**
 * (bnikom) code based on
 * 1. https://www.npmjs.com/package/react-image-viewer-zoom
 * [this npm package doesn't have a github associated with it so use
 * https://github.com/EslamNasser/react-image-viewer-zoom]
 * 2. https://www.npmjs.com/package/react-responsive-pinch-zoom-pan
 */

import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { string } from 'prop-types';
import { Col, Row } from 'reactstrap';

const ZOOM_LEVEL = {
  MIN: 1,
  MAX: 4,
};

const OFFSET_DEFAULT = {
  x: 0,
  y: 0,
};

const ImageZoom = ({ imgUrl, imgTitle }) => {
  // static getDerivedStateFromProps(props, state) {
  //   if (props.imgUrl !== state.imgUrl) {
  //     return {
  //       zoom: ZOOM_LEVEL.MIN,
  //       offset: OFFSET_DEFAULT,
  //       imgUrl: props.imgUrl,
  //     };
  //   }
  //   return null;
  // }

  const [zoom, setZoom] = useState(ZOOM_LEVEL.MIN);
  const [offset, setOffset] = useState(OFFSET_DEFAULT);

  let offsetRange = OFFSET_DEFAULT;
  let clientOffset = {
    x: undefined,
    y: undefined,
  };
  let draggable = undefined;

  useEffect(() => {
    document.addEventListener('mousedown', e => handleClickOutside(e));

    // Specify how to clean up after this effect:
    return function cleanup() {
      document.removeEventListener('mousedown', e => handleClickOutside(e));
    };
  });

  const imgEl = useRef(null);

  const onMoveStart = (e) => {
    clientOffset = {
      x: e.clientX,
      y: e.clientY,
    };
    draggable = true;
  }

  const onMove = (e) => {
    if ((!e.clientX && !e.clientY) || zoom === 1 || !draggable) {
      return;
    }
    const browserOffset = {
      x: (e.clientX - clientOffset.x) || 0,
      y: (e.clientY - clientOffset.y) || 0,
    };

    clientOffset = {
      x: e.clientX,
      y: e.clientY,
    };

    setOffset({ x: offset.x + browserOffset.x, y: offset.y + browserOffset.y })
  }

  const onMoveEnd = () => {
    draggable = false;
    let x = offset.x;
    let y = offset.y;
    if (Math.abs(offset.x) >= offsetRange.x) {
      x = offset.x < 0 ? Math.min(0, -(offsetRange.x)) : Math.max(0, offsetRange.x);
    }
    if (Math.abs(offset.y) >= offsetRange.y) {
      y = offset.y < 0 ? Math.min(0, -(offsetRange.y)) : Math.max(0, offsetRange.y);
    }
    setOffset({ x, y });
  }

  // TODO: new error image api
  const onImageError = (e) => {
    const { imgUrl } = this.props;
    const largeURl = imgUrl.replace('_original', '');
    e.target.src = largeURl;
  }

  const setOffsetRange = () => {
    /**
     * (bnikom) let's explain my logic here, shall we?
     *
     * 2 formulas:
     * 1. (zoom * length) - (length * (((zoom - 1)/2) + 1))
     * 2. (length * (((zoom - 1)/2) + 1)) - length
     *
     * (zoom - 1): the scale starts at 1, but initial image should not move at scale == 1
     * we need our calculations to start at 0 #IndexStartsAt0
     *
     * (zoom - 1) / 2: when you increase zoom, you are adding 0.5 to each side
     * ex. increasing the zoom from 1 to 2, you're adding 0.5 to each side
     *
     * (1 + ((zoom - 1) / 2): adding the initia1 (100%) of the starting scale
     *
     * length * (1 + ((zoom - 1) / 2): multiply by original length to find offset
     *
     * (length * (((zoom - 1)/2) + 1)): length - to find out our offset we need to subtract the original length
     * and see how much we have to move
     *               OR
     * (zoom * length) - (length * (((zoom - 1)/2) + 1)): subract calculated width from width of zoomed pic
    */

    const dx = (imgEl.offsetWidth * (1 + ((zoom - 1) / 2))) - imgEl.offsetWidth;
    const dy = (imgEl.offsetHeight * (1 + ((zoom - 1) / 2))) - imgEl.offsetHeight;
    offsetRange = {
      x: Math.max(0, dx),
      y: Math.max(0, dy),
    };
  }

  const resetOffset = () => {
    setOffset(OFFSET_DEFAULT);
  }

  const zoomImg = e => {
    if (e.deltaY > 0) {
      zoomIn(0.1);
      e.preventDefault();
    } else if (e.deltaY < 0) {
      zoomOut(0.1);
      e.preventDefault();
    }
  }

  const zoomIn = (level) => {
    setZoom(Math.min(zoom + level, ZOOM_LEVEL.MAX));
    setOffset(OFFSET_DEFAULT);

    // TODO: POTENTIAL CALLBACK NEEDED
    setOffsetRange();
    // this.setState({ zoom: Math.min(this.state.zoom + level, ZOOM_LEVEL.MAX), offset: OFFSET_DEFAULT }, () => {
    //   this.setOffsetRange();
    // });
  }

  const zoomOut = (level) => {
    if (Math.max(1, zoom - level) > 1) {

      // this.setState({ zoom: Math.max(1, this.state.zoom - level), offset: OFFSET_DEFAULT }, () => {
      //   this.setOffsetRange();
      // });
      setZoom(Math.max(1, zoom - level));
      setOffset(OFFSET_DEFAULT);

      setOffsetRange();
    } else {
      setZoom(Math.max(1, zoom - level));
      resetOffset();
      // this.setState({ zoom: Math.max(1, this.state.zoom - level) }, () => {
      //   this.resetOffset();
      // });
    }
  }

  const handleClickOutside = (e) => {
    // (bnikom) finding the modal parent of the react component
    const modalBody = document.body.querySelector('#modalImgBody');

    if (modalBody && !modalBody.contains(e.target)) {
      // (bnikom) I want this to re-render when then modal is closed, so it doesn't look strange
      // setTimeout(() => this.setState({ zoom: ZOOM_LEVEL.MIN, offset: OFFSET_DEFAULT }), 200);
      setTimeout(() => setZoom(ZOOM_LEVEL.MIN), setOffset(OFFSET_DEFAULT) , 200);
    }
  }

  const value = `translate3d(${offset.x}px, ${offset.y}px, 0px) scale(${zoom})`;

  return (
    <Row className="main-img-row">
      <Col
        className="tool-bar col-xs-1"
      >
        <Row>
          <Col className="zoom-button-group align-middle col-xs-6">
            <button
              className="zoom-in btn"
              onClick={() => zoomIn(1)}
              disabled={zoom >= ZOOM_LEVEL.MAX}
            >
              <span className="fa fa-search-plus fa-2x" />
            </button>
            <button
              className="zoom-out btn"
              onClick={() => zoomOut(1)}
              disabled={zoom <= ZOOM_LEVEL.MIN}
            >
              <span className="fa fa-search-minus fa-2x" />
            </button>
          </Col>
        </Row>
      </Col>
      <Col className="image-viewer col-xs-11 pull-right">
        <div className="image-wrapper block img-popup">
          <div
            className="image-outer"
            role="presentation"
            draggable={false}
            onDragStart={e => e.preventDefault()}
            onMouseMove={e => onMove(e)}
            onMouseDown={e => onMoveStart(e)}
            onMouseUp={e => onMoveEnd(e)}
            onWheel={e => zoomImg(e)}
          >
            <img
              className="reactImg"
              id="imgPopup"
              ref={imgEl}
              src={imgUrl}
              onError={e => onImageError(e)}
              alt={imgTitle}
              style={{ cursor: zoom > 1 ? 'all-scroll' : 'default', transform: value }}
            />
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default ImageZoom;

// function imageZoom(imgUrl, imgTitle) {
//   if (document.getElementById('reactField')) {
//     ReactDOM.render(
//       <ImageZoom
//         imgUrl={imgUrl}
//         imgTitle={imgTitle}
//       />, document.getElementById('reactField')
//     );
//   }
// }

// module.exports = imageZoom;
