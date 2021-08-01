import React, { createContext, useState, useEffect, useRef } from 'react';
import { io } from 'socket.io-client';

import Peer from 'simple-peer';

