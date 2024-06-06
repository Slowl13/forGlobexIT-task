SELECT 
	col.id, 
	col.name, 
	sd.name as sub_name, 
	sd.id as sub_id, 
	LEN(sd.name) - LEN(REPLACE(sd.name, '.', '')) AS sub_level,
	(SELECT COUNT(subdivision_id) FROM collaborators WHERE subdivision_id=col.subdivision_id GROUP BY subdivision_id) as cols_count
FROM 
	collaborators col
LEFT JOIN 
	subdivisions sd ON col.subdivision_id = sd.id
WHERE 
	sd.name LIKE '%1.%' 
	and col.age < 40 
	and sd.id != 100055 
	and sd.id != 100059 
ORDER BY 
    LEN(sd.name) - LEN(REPLACE(sd.name, '.', '')) ASC;
