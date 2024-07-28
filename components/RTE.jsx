import React from 'react'
import {Editor} from "@tinymce/tinymce-react"

const RTE = () => {
  return (
    <Editor
   initialValue='defult value'
   init={
     {
      selector: 'textarea#editable',  // change this value according to your HTML
  placeholder: 'Type here...',
  branding : false,
  menubar : true,
  height: 500,
  plugins:[
   'advlist', 'autolink', 'link', 'image', 'lists', 'charmap', 'preview'
  ],
  external_plugins: {
    'testing': 'http://www.testing.com/plugin.min.js',
    'maths': 'http://www.maths.com/plugin.min.js'
  }
  // toolbar: 'code'

     }
     
   }
    />
  )
}

export default RTE