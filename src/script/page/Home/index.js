import React from 'react';
import style from './index.module.css';

class Home extends React.Component {
  render() {
    return (
      <>
        <div className={style.passage}>
          Records.js is database cache library.Why need do this?Database store
          data in the disk.Read and write speed is lower than memory.Records.js
          use memory cache data which user already use.When need same data in
          the next time.Records.js will get it from memory with very high speed.
          Overall,use records.js can improve read and write speed of database.
        </div>
        <div className={style.passage}>
          Records.js use encapsulation api replace traditional sql sentences.
          Traditional sql sentences flooded uppercase and lowercase, string
          template replace and complex pattern match.Sql sentences is hard to
          remember and include too much detail.Use records.js can let user focus
          on bussiness logic without care about sql sentences.
        </div>
        <div className={style.passage}>
          Traditional database is charge store user data in disk reasonable.As
          for memory cache part is not required.That is mean separate two
          different function module can make more lower coupling.User can
          according concrete request choice use records.js or not.Choose
          records.js make database use more efficiently.Without records.js can
          save memory and disk space.
        </div>
        <div className={style.passage}>
          Database is be design as a client/server program.That is to say when
          use database need cross sql sentences operate database.Each above
          mentioned step will cause communication cost.Records.js cross calculate
          reduce sql sentences use.In this way will reeduce progress
          communication as possible.
        </div>
        <div className={style.passage}>
          Records.js manage database use meticulously and have complex mechanism.
          Here look like still have other very simple way,cache all datas in
          database.This plan will make each time start database with very long
          time.Because when database start need read all data to cache.This
          operate will cost huge time cost.
        </div>
        <div className={style.passage}>
          In general,high speed store device is more expensive and only store
          less content.Disk and memory is same logic.Memory is alway has less
          store space than disk.Records.js will help user use small memory try
          the best cache big disk space.You will have benifit of disk big
          store space and memory high read and write speed.
        </div>
        <div className={style.passage}>
          Follow records.js run for long time.Memory usage rate is increase step
          by step.In this time,memory will out of limit.Records.js provider
          function help release part of temporay memory reasonable.In this way
          limited memory is alway enough for long run time.
        </div>
      </>
    );
  }
}

export default Home;
