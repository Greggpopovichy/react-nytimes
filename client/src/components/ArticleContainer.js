import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Panel from "./Panel";
import Search from "./Search";
import ArticleDetail from "./ArticleDetail";
import API from "../utils/API";

class ArticleContainer extends Component {
    state = {
        result: {},
        search: ""
    };

    searchArticles = query => {
        API.search(query)
            .then(res => this.setState({ result: res.data }))
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };

    // When the form is submitted, search the nytimes API for the value of `this.state.search`
    handleFormSubmit = event => {
        event.preventDefault();
        this.searchArticles(this.state.search);
    };

    render() {
        return (
            <Container>
                <Row>
                    <Col size="md-4">
                        <Panel heading="Search">
                            <Search
                                value={this.state.search}
                                handleInputChange={this.handleInputChange}
                                handleFormSubmit={this.handleFormSubmit}
                            />
                        </Panel>
                    </Col>
                    <Col size="md-8">
                        <Panel
                            headline={this.state.result.headline || "Results"}
                        >
                            {this.state.result.headline
                                ? <ArticleDetail
                                    url={this.state.result.web_url}
                                    date={this.state.result.date}
                                    id={this.state.result.id}
                                />
                                : <h3>No Results to Display</h3>}
                        </Panel>
                    </Col>

                </Row>
            </Container>
        );
    }
}

export default ArticleContainer;