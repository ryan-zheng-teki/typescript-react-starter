import * as React from 'react';
import { Post } from './Post';
export interface HelloProps {
    compiler: string;
    framework: string;
}
export const Hello = (props: HelloProps) =>
    <>
        <h1>Hello from {props.compiler}
            and {props.framework} Woolala Hey,Yoki,Zoooio Chii
        </h1>
        <Post></Post>
    </>