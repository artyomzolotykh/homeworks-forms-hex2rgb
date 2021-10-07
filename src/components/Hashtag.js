const Hashtag = props => {

  const handleHashtagChange = evt => {
    const {value} = evt.target;
    props.onHashtag(value);
  }

  return (
    <input
      type="text"
      value={props.hashtag}
      onChange={handleHashtagChange}
    />
  )
}

export default Hashtag;