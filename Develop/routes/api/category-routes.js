const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// find all categories
// be sure to include its associated Products
router.get('/', async (req, res) => {
  try {
    const pullCategory = await Category.findAll ({
      include: [{ model: Product,
        attributes: [
          'id', 'product_name', 'price', 'stock', 'category_id'
        ]
      }]
    });
    // console.log(pullCategory)
    // console.log(typeof pullCategory)
    res.status(200).json(pullCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

// find one category by its `id` value
// be sure to include its associated Products
router.get('/:id', async (req, res) => {
  try {
    const pullCategoryById = await Category.findByPk (req.params.id, {
      include: [{ model: Product,
        attributes: [
          'id', 'product_name', 'price', 'stock', 'category_id'
        ]
      }]
    });
    if(!pullCategoryById){
      res.status(404).json ({ message: 'Incorrect Id! Enter correct Id.'});
      return;
    }
    res.status(200).json(pullCategoryById);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create a new category
router.post('/', async (req, res) => {
  console.log(req.body);
  try {
    const postNewCategory = await Category.create(req.body);
    res.status(200).json(postNewCategory);
  } catch (err) {
    res.status(400).json(err);
  }
});

// update a category by its `id` value
router.put('/:id', async (req, res) => {
  try {
    const updateCategoryById = await Category.update (req.body, {
      where: {id: req.params.id}
    });

    res.status(200).json(updateCategoryById);}
    catch (err){
      res.status(500).json(err)
    }
});

  // delete a category by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const removeCategory = await Category.destroy ({
      where: {
        id: req.params.id
      }
    });
    if (!removeCategory){res.status(404).json({ message: 'Incorrect category with requested Id. Please put correct Id'});
      return;
    }
    res.status(200).json(removeCategory);
  } catch (err) {
    res.status(500).json (err);
  }
});

module.exports = router;
