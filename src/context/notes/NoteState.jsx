import { useState } from 'react';
import noteContext from "./note-context";

const NoteState = (props) => {
  const sampleNotes = [
    {
      "_id": "651c1aaa71b5515e2a2c00c0",
      "user": "651b20aed2242793d3458b55",
      "title": "sample note 1",
      "descr": "this is just a test note",
      "tag": "General",
      "timestamp": "2023-10-03T13:44:10.693Z",
      "__v": 0
    },
    {
      "_id": "651c1b634d98e7a8c710414c",
      "user": "651b20aed2242793d3458b55",
      "title": "sample note 1",
      "descr": "this is just a test note",
      "tag": "development",
      "timestamp": "2023-10-03T13:47:15.093Z",
      "__v": 0
    },
    {
      "_id": "651c1b694d98e7a8c710414e",
      "user": "651b20aed2242793d3458b55",
      "title": "sample note 1",
      "descr": "this is just a test note",
      "tag": "General",
      "timestamp": "2023-10-03T13:47:21.154Z",
      "__v": 0
    },
    {
      "_id": "651d53e859935996ae14352c",
      "user": "651b20aed2242793d3458b55",
      "title": "sample note 1",
      "descr": "this is just a test note",
      "tag": "development",
      "timestamp": "2023-10-04T12:00:40.875Z",
      "__v": 0
    },
    {
      "_id": "651d53ea59935996ae14352e",
      "user": "651b20aed2242793d3458b55",
      "title": "sample note 1",
      "descr": "this is just a test note",
      "tag": "development",
      "timestamp": "2023-10-04T12:00:42.909Z",
      "__v": 0
    },
    {
      "_id": "651d53ec59935996ae143530",
      "user": "651b20aed2242793d3458b55",
      "title": "sample note 1",
      "descr": "this is just a test note",
      "tag": "development",
      "timestamp": "2023-10-04T12:00:44.073Z",
      "__v": 0
    }
  ]

  const [notes, setNotes] = useState(sampleNotes);

  return <noteContext.Provider value={{notes, setNotes}}>{props.children}</noteContext.Provider>;
};

export default NoteState;
