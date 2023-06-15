{
  products.length > 0 && (
      products.map((row, key)=>(
          <tr key={key}>
              <td>{row.title}</td>
              <td>{row.description}</td>
              <td>
                  <img width="50px" src={`http://localhost:8000/storage/product/image/${row.image}`} />
              </td>
              <td>
                  <Link to={`/product/edit/${row.id}`} className='btn btn-success me-2'>
                      Edit
                  </Link>
                  <Button variant="danger" onClick={()=>deleteProduct(row.id)}>
                      Delete
                  </Button>
              </td>
          </tr>
      ))
  )
}