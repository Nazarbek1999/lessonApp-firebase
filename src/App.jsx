import React, { useEffect,  } from "react";
import { connect } from "react-redux";
import { action } from "./Utils/redux/redux";
import Rodal from "rodal";

const App = (props) => {
  useEffect(() => {
    props.loadUsers();
  }, []);
  return (
    <div>
      <div className="logo">
        <h1>toolkit + firebase video project</h1>
      </div>
      <button onClick={() => props.openRodal()} className=" btn btn-success">
        add video
      </button>

      <div className="project">
        {props.users.map((item, i) => (
          <div key={i} className="salom">
            <p>videolar soni{props.video.length}</p>
            <h1>{item.lessonName}</h1>
            <button onClick={() => props.view(i)} className="salomdel2">
              view video
            </button>
            <button
              onClick={() => props.deleteUser(item.id)}
              className="salomdel"
            >
              <h4>delete lesson</h4>
            </button>
          </div>
        ))}
      </div>
      <Rodal visible={props.isOpen2} onClose={() => props.view()}>
        <div className=" mt-3">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>video name</th>
                <th>link</th>
              </tr>
            </thead>
            <tbody>
              {props.users[props.lessonsVideos]?.video.map((itm, i) => (
                <tr key={i}>
                  <td>{itm.vName}</td>
                  <td>
                    <a href={itm.vidLink}></a>
                    {itm.vLink}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Rodal>

      <Rodal
        height={500}
        visible={props.isOpen}
        onClose={() => props.openRodal()}
      >
        <div className=" rodal1">
          <input
            onChange={(e) => props.addLessonname(e.target.value)}
            placeholder="lesson name...."
            className=" form-control w-75 mx-auto mb-3"
            type="text"
            name=""
            id=""
          />
          {props.video.map((item, i) => (
            <div className=" d-flex p-2 gap-3" key={i}>
              <input
                onChange={(e) =>
                  props.vName({ value: e.target.value, index: i })
                }
                placeholder="lesson  video...."
                type="text"
                className=" form-control w-50 mb-2"
              />
              <input
                onChange={(e) =>
                  props.vLink({ value: e.target.value, index: i })
                }
                placeholder="video   link ...."
                type="text"
                className=" form-control w-50 mb-2"
              />
              <button
                onClick={() => props.deleteInp(i)}
                className="btn btn-danger w-25 mb-2"
              >
                x
              </button>
            </div>
          ))}
          <button onClick={() => props.addInp()} className=" btn btn-dark mb-3">
            add video
          </button>
          <br />
          <button
            onClick={() =>
              props.saveUser({ ...props.lessonObj, video: props.video })
            }
            className=" btn btn-success"
          >
            save lesson
          </button>
        </div>
      </Rodal>
    </div>
  );
};

export default connect((state) => ({ ...state }), action)(App);
