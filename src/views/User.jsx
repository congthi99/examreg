/*!

=========================================================
* Paper Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Button
} from "reactstrap";

class User extends React.Component {
  render() {
    return (
        <div className="content">
          <Button
              className="btn-round"
              color="primary"
              type="submit"
          >
            Cập nhật danh sách sinh viên
          </Button>
          <Button
              className="btn-round"
              color="primary"
              type="submit"
          >
            Tạo kì thi
          </Button>
        </div>
    );
  }
}

export default User;
