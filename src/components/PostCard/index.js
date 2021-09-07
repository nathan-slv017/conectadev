import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar'

const useStyle = makeStyles((theme) => ({
    root: {
        marginBottom: theme.spacing(2)
    },
    subheader: {
        display: 'flex',
        alignItems: 'center',
    },
    caption: {
        marginRight: theme.spacing(1)
    },
    message: {
        height: 'auto',
        marginBottom: theme.spacing(1),
        padding: '0 24px'
    },
    image: {
        height: '300px',
        width: '100%',
        maxWidth: '100%'
    }
}))

export default function PostCard({ post }) {

    const classes = useStyle();

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={<Avatar src={post.author.avatar} />}
                title={<Typography variant="h6">{post.title}</Typography>}
                subheader={
                    <>
                        <div className={classes.subheader}>
                            <Typography className={classes.caption} variant="caption">
                                {'Avaliado por'}
                            </Typography>
                            <Typography className={classes.caption} variant="subtitle2">
                                {post.author.name}
                            </Typography>
                            <Typography className={classes.caption} variant="subtitle2">
                                {post.date}
                            </Typography>
                        </div>
                    </>
                }
            />

            <CardContent>
                <Typography className={classes.message}>
                    {post.hashtags}
                </Typography>
                <CardActions >
                    <img src={post.image} className={classes.image} />
                </CardActions>
            </CardContent>
        </Card>
    )
}