'use strict';

import fileConfig from '../config/config.json' assert { type: 'json' }
import { v2 as cloudinary } from 'cloudinary'

const env = process.env.NODE_ENV || 'development';
const config = fileConfig[env].cloudinary;

cloudinary.config({
    cloud_name: config.cloud_name,
    api_key: config.api_key,
    api_secret: config.api_secret
});

export default cloudinary;