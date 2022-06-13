import React ,{ useRef, useEffect,useState } from 'react';
import WebViewer from '@pdftron/webviewer';
import {BrowserRouter as useParams,useLocation} from 'react-router-dom'
import { Document, Page } from 'react-pdf';
const WebViewBook =(props)=> {
    const { book}=useLocation().state;
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
  
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
    }
  
    return (
      <div>
        <Document file={book + ".pdf"} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
        <p>
          Page {pageNumber} of {numPages} {book}
        </p>
      </div>
    );
}
export default WebViewBook;