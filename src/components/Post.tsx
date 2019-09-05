import { PostProps, PostState } from "./types/post";
import * as React from "react";
import {Trans} from "@lingui/macro";

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
                <h1><Trans>This is not correct</Trans></h1>
                <p>this.state.user</p>
                <textarea>this.state.message</textarea>
            </div>
        )
    }
}