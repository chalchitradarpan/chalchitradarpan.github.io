import React from 'react'
import styles from './TheTeam.module.css'
import Grid from '@material-ui/core/Grid';

const TheTeam2k25 = () => {
	return (
    <div className={styles.root} id="theteam">
			<h1 className={styles.heading}>
				Editorial Board
			</h1>
			<Grid container xs={12} className={styles.container} spacing={8}>
				<Grid item xs={12} md={6} className={styles.person}>
					<span className={styles.image__block} >
						<img className={styles.image} src="daksha_editor_in_cheif.jpeg" alt="Daksha"></img>
					</span>
					<span className={styles.name}>
						Daksha
					</span>
					<span className={styles.position}>
						(Editor-in-Chief)
					</span>
				</Grid>
				<Grid item xs={12} md={6} className={styles.person}>
					<span className={styles.image__block} >
						<img className={styles.image} src="nikita_editor_in_chief.jpeg" alt="Nikita"></img>
					</span>
					<span className={styles.name}>
						Nikita
					</span>
					<span className={styles.position}>
						(Editor-in-Chief)
					</span>
				</Grid>
				<Grid item xs={12} md={6} lg={4} className={styles.person}>
					<span className={styles.image__block} >
						<img className={styles.image} src="Konkona_editor.jpeg" alt="Konkona"></img>
					</span>
					<span className={styles.name}>
						Konkona
					</span>
					<span className={styles.position}>
						(Editor)
					</span>
				</Grid>
				<Grid item xs={12} md={6} lg={4} className={styles.person}>
					<span className={styles.image__block} >
						<img className={styles.image} src="niveditha_editor.jpeg" alt="Niveditha"></img>
					</span>
					<span className={styles.name}>
						Niveditha
					</span>
					<span className={styles.position}>
						(Editor)
					</span>
				</Grid>
				<Grid item xs={12} md={6} lg={4} className={styles.person}>
					<span className={styles.image__block} >
						<img className={styles.image} src="priyadarshini_editor.jpg" alt="Priyadarshini"></img>
					</span>
					<span className={styles.name}>
						Priyadarshini
					</span>
					<span className={styles.position}>
						(Editor)
					</span>
				</Grid>
				<Grid item xs={12} md={6} lg={4} className={styles.person}>
					<span className={styles.image__block} >
						<img className={styles.image} src="dummy_image.jpg" alt="Ravneet"></img>
					</span>
					<span className={styles.name}>
						Ravneet
					</span>
					<span className={styles.position}>
						(Editor)
					</span>
				<Grid item xs={12} md={6} lg={4} className={styles.person}>
					<span className={styles.image__block} >
						<img className={styles.image} src="dummy_image.jpg" alt="Irijaya"></img>
					</span>
					<span className={styles.name}>
						Irijaya
					</span>
					<span className={styles.position}>
						(Journal Designer)
					</span>
				</Grid>
        <Grid item xs={12} md={6} lg={4} className={styles.person}>
					<span className={styles.image__block} >
						<img className={styles.image} src="dummy_image.jpg" alt="Priyanka"></img>
					</span>
					<span className={styles.name}>
						Priyanka
					</span>
					<span className={styles.position}>
						(Journal Designer)
					</span>
				</Grid>
				<Grid item xs={12} md={6} lg={4} className={styles.person}>
					<span className={styles.image__block} >
						<img className={styles.image} src="dummy_image.jpg" alt="Akriti"></img>
					</span>
					<span className={styles.name}>
						Akriti
					</span>
					<span className={styles.position}>
						(Illustrator)
					</span>
				</Grid>
       <Grid item xs={12} md={6} lg={4} className={styles.person}>
					<span className={styles.image__block} >
						<img className={styles.image} src="dummy_image.jpg" alt="Akriti"></img>
					</span>
					<span className={styles.name}>
						Akriti
					</span>
					<span className={styles.position}>
						(Illustrator)
					</span>
				</Grid>
       <Grid item xs={12} md={6} lg={4} className={styles.person}>
					<span className={styles.image__block} >
						<img className={styles.image} src="dummy_image.jpg" alt="Mahati"></img>
					</span>
					<span className={styles.name}>
						Mahati
					</span>
					<span className={styles.position}>
						(Illustrator)
					</span>
				</Grid>
      <Grid item xs={12} md={6} lg={4} className={styles.person}>
					<span className={styles.image__block} >
						<img className={styles.image} src="dummy_image.jpg" alt="Manya"></img>
					</span>
					<span className={styles.name}>
						Manya
					</span>
					<span className={styles.position}>
						(Illustrator)
					</span>
				</Grid>
    <Grid item xs={12} md={6} lg={4} className={styles.person}>
					<span className={styles.image__block} >
						<img className={styles.image} src="dummy_image.jpg" alt="Ruchi"></img>
					</span>
					<span className={styles.name}>
						Ruchi
					</span>
					<span className={styles.position}>
						(Illustrator)
					</span>
				</Grid>
			</Grid>
    </div>
  )
}

export default TheTeam2k25
