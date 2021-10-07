import React from 'react';
import '@testing-library/jest-dom';
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import { render } from '@testing-library/react';

global.React = React;
global.render = render;
global.userEvent = userEvent;
