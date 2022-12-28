const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

  // find all tags
  // be sure to include its associated Product data
router.get('/', async (req, res) => {
  try {
    const allTags = await Tag.findAll ({
      include: [{model:Product, attributes: ['product_name']}],
      attributes: ['id','product_name', 'price', 'stock', 'category_id']
    })
    res.status(200).json(allTags);
  } catch(err) {
    res.status(500).json(err);
  }
});

  // find a single tag by its `id`
  // be sure to include its associated Product data
router.get('/:id', async (req, res) => {
  try {
    const singleTag = await Tag.findByPk (req.params.id, {
      include: [
        {model:Product, attributes: ['product_name']},
        {model:ProductTag, attributes: ['tag_name']}],
      attributes: ['id','product_name', 'price','stock', 'category_id']
    });

    if (!singleTag) {
      res.status(404).json({message: 'Tag not found!'});
      return;
    }

    res.status(200).json(singleTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

  // create a new tag
router.post('/', async (req, res) => {
  try {
    const newTag = await Tag.create(req.body);
    res.status(201).json(newTag); 
  } catch (err) {
    res.status(500).json(err);
  }
});

  // update a tag's name by its `id` value
router.put('/:id', async (req, res) => {
  try {
    const updateTag = await Tag.update (req.body, {
      where: {
        id: req.params.id
      }});
    if (!updateTag) {
      res.status(404).json({message: 'Tag not found!'});
      return;
    } res.status(200).json(updateTag);
  } catch (err){
    res.status(500).json(err);
  }
});

  // delete on tag by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const deleteTag = await Tag.destroy({
      where: {
        id: req.params.id
      }});
    if (!deleteTag) {
      res.status(404).json({message: 'Tag not found!'});
      return;
    } res.status(200).json(deleteTag);
  } catch (err) {
    res.status(500).json(err);
  }  
});

module.exports = router;
