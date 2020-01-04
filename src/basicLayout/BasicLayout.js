import React, { Component } from 'react'
import { PageHeader, Button, Descriptions } from 'antd';
import aPage from '../routes/aPage';
import IndexPage from '../routes/IndexPage';
import { Router, Route, Switch } from 'dva/router';


class BasicLayout extends Component {
    state = {}
    render() {
        console.log('Route', this.props)
        const { children, history } = this.props
        return (
            <div>
                <PageHeader
                    style={{
                        border: '1px solid rgb(235, 237, 240)',
                    }}
                    onBack={() => null}
                    title="Title"
                    subTitle="This is a subtitle"
                />
                <Router history={history}>
                    <Switch>
                        <Route path="/" exact component={IndexPage} />
                        <Route path="/login" component={IndexPage} />
                        <Route path="/index/a" component={aPage} />
                    </Switch>
                </Router>
                {/* {children} */}
            </div>
        )
    }
}


export default BasicLayout