<div class="row">
                {invoices.map((inv, i) => (
                    <Grid item xs={2} sm={4} md={4} key={i} >
                        <Card >
                            <CardMedia>
                                <DescriptionIcon style={{ maxWidth: '80px', maxHeight: '80px', minWidth: '80px', minHeight: '80px' }} />
                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom variant="h6" >
                                    DOC Date
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Invoice for first part
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">View</Button>
                                <Button size="small">Download</Button>
                            </CardActions>
                        </Card>
                    </Grid>

                ))}
            </Grid>