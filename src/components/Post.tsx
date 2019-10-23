import { PostProps, PostState } from "./types/post";
import * as React from "react";
import { Trans } from "@lingui/react";

export class Post extends React.Component<{},PostState> {
    constructor(props: PostProps) {
        super(props);

        this.state = {
            user: "Ryan",
            message: "Hello"
        }
    }

    render() {
        return (
            <div>
                <h1><Trans id="This is not correct"/></h1>
                <p>this.state.user</p>
            </div>
        )
    }
}