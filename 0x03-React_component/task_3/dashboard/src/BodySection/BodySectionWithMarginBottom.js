import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BodySection } from './BodySection';
import './BodySectionWithMarginBottom.css';

function BodySectionWithMarginBottom(props) {
    return (
        <div className="bodySectionWithMargin">
            <BodySection {...props}>
            </BodySection>
        </div>
    )
}

export { BodySectionWithMarginBottom };
